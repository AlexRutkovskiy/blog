import { DotenvParseOutput } from 'dotenv';
import { Router as Router } from 'express';
import fs from 'fs';
import { IRouteList, IRoute } from '../common/interfaces/IRoute';


export class RouterService {

    private config: DotenvParseOutput;
    private _router: Router;
    private typeFile: 'js'|'ts';

    constructor(config: DotenvParseOutput) {
        this.config = config;
        this._router = Router();

        this.typeFile = this.config['MOD'] === 'develop' ? 'ts' : 'js';
    }

    public async configureRoutes(): Promise<void|null> {
        const types = this.config['ROUTES_TYPE'] ?? null;
        if (!types) {
            return null;
        }

        const loadedRoutes = await this.loadRoutes(types);
        await this.prepareRoutes(loadedRoutes);
    }

    private async loadRoutes(types: string): Promise<IRouteList> {
        let tmpRoutes:IRouteList = {};
        const splitTypes = types.split(',');

        for (let i = 0; i < splitTypes.length; i++) {
            try {
                const { routes } = await require(`../routes/${splitTypes[i]}.${this.typeFile}`); 
                tmpRoutes = {...tmpRoutes, ...routes};
            } catch(e) {
                // @TODO throw server error
                const message = e instanceof Error ? e.message : '';
                console.log('Error load routes. ', message);
            }
        }

        return tmpRoutes;
    }


    private async prepareRoutes(data: IRouteList) {
        if (!Object.keys(data).length) {
            // @TODO throw server error
            console.log('Error routes')
        }

        const keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const routes = data[key];

            for (let k = 0; k < routes.length; k++) {
                const route = routes[k];
                const pathController = `../controllers/${route.controller.getClassName()}.${this.typeFile}`;
                await this.initializeRoute(key, route, pathController);
            }
        }
    }

    private async initializeRoute(key: string, route: IRoute, pathController: string): Promise<void> {
        try {
            const path = `/${key.toLowerCase().trim()}${route.path}`;
            const LoadController = await require(pathController);
            const controller = new LoadController[route.controller.getClassName()];

            if (!controller[route.controllerMethod]) {
                // @TODO throw server error
                console.log('Error routes controller method')
            }
            const handleRoute = controller[route.controllerMethod].bind(controller);
            const functions = (route.middlewares?.length) ? [...route.middlewares, handleRoute] : [handleRoute]
            this._router[route.httpMethod](path, [...functions]);
        } catch(e) {
            // @TODO throw server error
            console.log('Error routes controller');
        }
    }

    public get(): Router {
        return this._router;
    }
}
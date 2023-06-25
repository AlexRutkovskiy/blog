import express, { Express } from 'express';
import { Server } from 'http';
import { DotenvParseOutput } from 'dotenv';
import { RouterService } from './services/RouterService';
import { IRouterService } from './interfaces/IRouterService';


export class Application {

    private server!:        Server;
    private app:            Express;
    private port:           number;
    private config:         DotenvParseOutput;
    private routeService:   IRouterService;
    
    constructor(config: DotenvParseOutput) {
        this.config = config;
        this.port = this.config['PORT'] ? Number(this.config['PORT']) : 1234;

        this.routeService = new RouterService(config);
        this.app = express();
    }

    private useMiddleware(): void {

    }

    private useHandleExceptions():void {

    }

    private async connectToDB(callbackSuccessConnect?: () => void, callbackErrorConnect?: () => void) {

        if (callbackSuccessConnect) {
            callbackSuccessConnect();
        }

        if (callbackErrorConnect) {
            callbackErrorConnect();
        }
    }

    public async run(): Promise<void> {
        try {
            await this.connectToDB();
            this.useMiddleware();
            await this.routeService.configureRoutes()
        } catch(e) {

        }

        this.useHandleExceptions();    
        this.server = this.app.listen(this.port);
    }

    public stop(): void {
        if (!this.server) {
            return;
        }

        this.server.close();
    }
}
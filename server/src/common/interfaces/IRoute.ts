import { Router, Request, Response, NextFunction } from 'express';
import { HTTP_METHODS } from "../constances";
import { IController } from "./IController";

export interface IMiddleware {
    execute: (req: Request, res: Response, next: NextFunction) => void
}

export interface IRoute {
    path: string;
    httpMethod: keyof Pick<Router, HTTP_METHODS.GET | HTTP_METHODS.POST | HTTP_METHODS.DELETE | HTTP_METHODS.PATCH | HTTP_METHODS.PUT>;
    controller: IController;
    controllerMethod: string;
    middlewares?: IMiddleware[]
}

export interface IRouteList {
    [k: string]: IRoute[]
}
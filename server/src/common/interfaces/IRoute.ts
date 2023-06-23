import { HTTP_METHODS } from "../constances";
import { IController } from "./IController";

export interface IRoute {
    path: string;
    httpMethod: HTTP_METHODS;
    controller: IController;
    controllerMethod: string;
}

export interface IRouteList {
    [k: string]: IRoute[]
}
import { Router } from "express";


export interface IRouterService {
    configureRoutes: ()=> void;
    get: () => Router;
}
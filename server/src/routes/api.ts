import { HTTP_METHODS } from "../common/constances";
import { IRouteList } from "../common/interfaces/IRoute";
import { UserController } from "../controllers/UserController";


const auth = [
    {
        path: "/sign-in",
        httpMethod: HTTP_METHODS.POST,
        controller: UserController,
        controllerMethod: 'login'
    },
    {
        path: "/sign-up",
        httpMethod: HTTP_METHODS.POST,
        controller: UserController,
        controllerMethod: 'register'
    },
    {
        path: "/logout",
        httpMethod: HTTP_METHODS.POST,
        controller: UserController,
        controllerMethod: 'logout'
    }
];





export const routes: IRouteList = {
    auth,
    healthcheck: [
        {
            path: "/",
            httpMethod: HTTP_METHODS.GET,
            controller: UserController,
            controllerMethod: 'check'
        }
    ]
};
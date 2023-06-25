import { BaseController } from "../common/controller/BaseController";


export class UserController extends BaseController {

    private name: string = 'UserController';

    constructor() {
        super();
    }

    public login() {}

    public register() {}

    public logout() {}

    public check() {
        console.log('Test check!!!!!')
    }
}
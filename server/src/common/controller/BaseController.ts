import { IController } from "../interfaces/IController";


export class BaseController implements IController {

    getClassName(): string {
        return BaseController.getClassName();
    }

    static getClassName(): string {
        return this.name;
    }

}
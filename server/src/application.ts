import express, { Express } from 'express';
import { Server } from 'http';


export class Application {

    private server!:    Server;
    private app:        Express;
    private port:       number

    
    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    private useMiddleware(): void {

    }

    private useRoutes(): void {

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
            this.useRoutes();
            this.useHandleExceptions();    
            this.server = this.app.listen(this.port);
        } catch(e) {

        }
    }

    public stop(): void {
        if (!this.server) {
            return;
        }

        this.server.close();
    }
}
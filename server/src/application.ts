import express, { Express } from 'express';
import { Server } from 'http';
import { DotenvParseOutput } from 'dotenv';


export class Application {

    private server!:    Server;
    private app:        Express;
    private port:       number;
    private config:     DotenvParseOutput;
    
    constructor(config: DotenvParseOutput) {
        this.config = config;
        this.port = this.config['PORT'] ? Number(this.config['PORT']) : 1234;
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
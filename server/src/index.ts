import { Application } from './application';

async function bootstrap() {
    const app = new Application(1234);
    app.run();
}

bootstrap();
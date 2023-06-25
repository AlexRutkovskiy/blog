import { Application } from './application';
import { ConfigService } from './services/ConfigService';
import { LoggerService } from './services/LoggerService';

async function bootstrap() {
    const config = (new ConfigService()).get();
    const logger = new LoggerService();

    if (config !== null) {
        const app = new Application(config, logger);
        app.run();
    }
}

bootstrap();
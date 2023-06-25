import { Application } from './application';
import { ConfigService } from './services/ConfigService';

async function bootstrap() {
    const config = (new ConfigService()).get();
    
    if (config !== null) {
        const app = new Application(config);
        app.run();
    }
}

bootstrap();
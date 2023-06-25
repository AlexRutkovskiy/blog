import { config as dotEnvConfig, DotenvParseOutput } from 'dotenv';


export class ConfigService {

    private config: DotenvParseOutput | null = null;

    constructor() {
        const tmpConf = dotEnvConfig();
        if (!tmpConf.error && typeof tmpConf.parsed !== 'undefined') {
            this.config = tmpConf?.parsed;
        }
    }

    public get(): DotenvParseOutput|null {
        return this.config;
    }

    public getByKey(key: string): string|null {
        if ((this.config && !this.config[key]) || !this.config) {
            return null;
        }
        
        return String(this.config[key]);
    }
} 
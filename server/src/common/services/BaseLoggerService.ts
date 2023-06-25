import { ILogger } from "../interfaces/ILogger";


export abstract class BaseLoggerService implements ILogger{

    public abstract info(...args: any | null): void 

    public abstract warning(...args: any | null): void;

    public abstract error(...args: any | null): void;

}


export abstract class BaseLoggerService {

    public abstract info(...args: any | null): void 

    public abstract warning(...args: any | null): void;

    public abstract error(...args: any | null): void;

}
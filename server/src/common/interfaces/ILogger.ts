

export interface ILogger {
    info: (...args: any | null) => void;
    warning: (...args: any | null) => void;
    error: (...args: any | null) => void;
}
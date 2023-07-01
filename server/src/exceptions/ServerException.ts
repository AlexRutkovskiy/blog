

export class ServerException extends Error {

    private code: number;
    private data?: string[]

    constructor(message: string, code: number, data?: string[]) {
        super(message)
        this.code = code;
        this.data = data;
    }

    public getAdditionalData(): string[]|undefined {
        return this.data
    }

    public static IntervalServerError(data?: string[]) {
        return new ServerException("Internal Server Error", 500, data);
    }

    public static NotImplemented(data?: string[]) {
        return new ServerException("Not Implemented", 501, data);
    }
}
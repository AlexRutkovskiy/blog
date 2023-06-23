import chalk from 'chalk';
import { BaseLoggerService } from '../common/services/BaseLoggerService';

export class LoggerService extends BaseLoggerService {

    private prepareMessage(msg: any): string {
        return `[${(new Date()).toLocaleDateString('en-US')}] ${msg}`;
    }

    public info(...args: any): void {
        console.log(chalk.green(this.prepareMessage(args)));
    }

    public warning(...args: any): void {
        console.log(chalk.yellow(this.prepareMessage(args)));
    }

    public error(...args: any): void {
        console.log(chalk.red(this.prepareMessage(args)));
    }

}
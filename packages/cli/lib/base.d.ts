import Command from '@oclif/command';
import { AxiosStatic } from 'axios';
export default abstract class extends Command {
    private configuration;
    private apiKey;
    protected fetch: AxiosStatic | undefined;
    init(): Promise<void>;
}

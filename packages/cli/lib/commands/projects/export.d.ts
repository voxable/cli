import Base from '@voxable/command';
export default class ExportProject extends Base {
    static description: string;
    static examples: string[];
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    run(): Promise<void>;
}

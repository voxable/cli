import Base from '../../base';
export default class ExportProject extends Base {
    static description: string;
    static examples: string[];
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    run(): Promise<void>;
}

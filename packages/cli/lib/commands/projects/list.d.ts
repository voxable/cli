import Base from '@voxable/command';
export default class ListProjects extends Base {
    static description: string;
    static examples: string[];
    static flags: {
        json: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<undefined>;
}

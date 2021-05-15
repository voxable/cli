import Base from '../../base';
export default class ListProjects extends Base {
    static description: string;
    static examples: string[];
    run(): Promise<void | undefined>;
}

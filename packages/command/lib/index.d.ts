import Command from '@oclif/command';
import Client from '@voxable/client';
export default abstract class extends Command {
    private configuration;
    protected client: Client | undefined;
    init(): Promise<void>;
}

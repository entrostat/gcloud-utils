import { Command, flags } from '@oclif/command';
import * as path from 'path';
import { readConfigJson } from '../shared/helpers/read-config-json';

export default class Info extends Command {
    static description = 'Prints the current info around the selected project and cluster.';

    static aliases = ['i', 'print', 'p'];

    static flags = {};

    static args = [];

    async run() {
        const { args, flags } = this.parse(Info);
        const configPath = path.join(this.config.configDir, 'config.json');
        const config = await readConfigJson(configPath);
        const selectedCluster = config.selectedCluster;
        this.log(JSON.stringify(selectedCluster, null, 4));
    }
}

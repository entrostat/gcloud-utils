import { Command } from '@oclif/command';
import * as path from 'path';
import { readConfigJson } from '../../shared/helpers/read-config-json';

export default class Print extends Command {
    static description = 'Print the current config.';

    static examples = [`$ gcu print`];

    static flags = {};

    static args = [];

    async run() {
        const { args, flags } = this.parse(Print);
        const configPath = path.join(this.config.configDir, 'config.json');
        const config = await readConfigJson(configPath);
        const clusters = config.clusters;

        this.log(config);
    }
}

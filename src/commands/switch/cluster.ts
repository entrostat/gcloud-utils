import { Command } from '@oclif/command';
import { executeCommand } from '../../shared/helpers/execute-command';
import * as path from 'path';
import * as inquirer from 'inquirer';
import { readConfigJson } from '../../shared/helpers/read-config-json';
import { uniqBy } from 'lodash';
// @ts-ignore
import * as inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import * as Fuse from 'fuse.js';
import { ClusterDetails } from '../../shared/models/cluster-details';
import { addToConfigJson } from '../../shared/helpers/add-to-config-json';

export default class Cluster extends Command {
    static description = 'Switch the active Kubernetes cluster.';

    static examples = [`$ gcu switch:cluster`];

    static flags = {};

    static args = [];

    async run() {
        const { args, flags } = this.parse(Cluster);
        const configPath = path.join(this.config.configDir, 'config.json');
        const config = await readConfigJson(configPath);
        const clusters = config.clusters;

        const projects = uniqBy(
            clusters.map((c: ClusterDetails) => ({ name: c.projectName, cluster: c.clusterName })).sort(),
            'name',
        );
        inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

        // @ts-ignore
        const fuse = new Fuse(projects, {
            keys: ['name', 'cluster'],
        });
        const project: any = await inquirer.prompt([
            {
                name: 'project',
                message: 'Select a project',
                type: 'autocomplete',
                source: (currentAnswers: any, input: string) => {
                    if (!input) {
                        return projects;
                    }
                    const results = fuse.search(input);
                    return results.map((r: { item: any }) => r.item);
                },
            },
        ]);

        const filteredClusters = clusters
            .filter((c: ClusterDetails) => c.projectName === project.project)
            .map((c: any) => {
                c.name = c.clusterName;
                return c;
            });
        const cluster: any = await inquirer.prompt([
            {
                name: 'cluster',
                message: 'Select a cluster',
                type: 'list',
                choices: filteredClusters,
            },
        ]);

        const selectedCluster = filteredClusters.filter((c: any) => c.clusterName == cluster.cluster)[0];

        await executeCommand(`gcloud config set project ${selectedCluster.projectId}`, this.log, this.log);
        await executeCommand(
            `gcloud container clusters get-credentials ${selectedCluster.clusterName} --region=${selectedCluster.clusterRegion}`,
            this.log,
            this.log,
        );

        await addToConfigJson(configPath, { selectedCluster });
    }
}

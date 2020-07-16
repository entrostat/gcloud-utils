import {Command} from "@oclif/command";
import {executeCommand} from "../../shared/helpers/execute-command";
import * as path from 'path';
import {addToConfigJson} from "../../shared/helpers/add-to-config-json";
import * as fs from 'fs-extra';
import * as inquirer from 'inquirer';
import {readConfigJson} from "../../shared/helpers/read-config-json";
import {uniq} from 'lodash';

interface ClusterDetails {
  clusterName: string;
  clusterRegion: string;
  projectId: string;
  projectName: string;
}

export default class Cluster extends Command {
  static description = 'Switch cluster.';

  static examples = [
    `$ gcu switch:cluster`,
  ];

  static flags = {};

  static args = [];

  async run() {
    const { args, flags } = this.parse(Cluster);
    const configPath = path.join(this.config.configDir, 'config.json');
    const config = await readConfigJson(configPath);
    const clusters = config.clusters;

    const projects = uniq(clusters.map((c: ClusterDetails) => ({name: c.projectName})).sort());
    const project: any = await inquirer.prompt([{
      name: 'project',
      message: 'Select a project',
      type: 'list',
      choices: projects,
    }])

    const filteredClusters = clusters.filter((c: ClusterDetails) => c.projectName === project.project)
      .map((c: any) => {
        c.name = c.clusterName;
        return c;
      });
    const cluster: any = await inquirer.prompt([{
      name: 'cluster',
      message: 'Select a cluster',
      type: 'list',
      choices: filteredClusters,
    }]);

    const selectedCluster = filteredClusters.filter((c: any) => c.clusterName == cluster.cluster)[0];

    await executeCommand(`gcloud config set project ${selectedCluster.projectId}`, this.log, this.log);
    await executeCommand(`gcloud container clusters get-credentials ${selectedCluster.clusterName} --region=${selectedCluster.clusterRegion}`, this.log, this.log);
  }

}

import {Command} from "@oclif/command";
import {executeCommand} from "../shared/helpers/execute-command";
import * as path from 'path';
import {addToConfigJson} from "../shared/helpers/add-to-config-json";
import * as fs from 'fs-extra';

interface ClusterDetails {
  clusterName: string;
  clusterRegion: string;
  projectId: string;
  projectName: string;
}

export default class Sync extends Command {
  static description = 'Stores all of the projects and clusters so that the switch is a lot faster.';

  static examples = [
    `$ gcu sync`,
  ];

  static flags = {};

  static args = [];

  async run() {
    const { args, flags } = this.parse(Sync);
    await fs.mkdirp(this.config.configDir);
    const configPath = path.join(this.config.configDir, 'config.json');

    const projects = await this.pullProjects();
    await addToConfigJson(configPath, {projects});
    const keys = Object.keys(projects).filter(key => projects.hasOwnProperty(key));
    this.log(`${keys.length} projects synced!`);

    let clusters: ClusterDetails[] = [];

    for (const key of keys) {
      await executeCommand(`gcloud config set project ${projects[key].projectId}`, this.log, this.log);
      const projectClusters = await this.getClusters(projects[key].projectId, projects[key].projectName);
      clusters = clusters.concat(projectClusters);
    }

    await addToConfigJson(configPath, {clusters});
    this.log(`Stored ${clusters.length} clusters!`);

    this.log(`Sync done!`);
  }

  private async pullProjects() {
    const projects = await executeCommand(`gcloud projects list`, this.log, this.log);
    const removedWhitespace = projects.replace(/  +/g, '|');
    const projectArray = removedWhitespace.split('\n')
      .filter(line => !/PROJECT_ID/.test(line))
      .map(line => line.split('|'))
      .filter(line => line[1]);

    const result: {
      [projectName: string]:  {
        projectId: string;
        projectName: string;
        id: number;
      }
    } = {};

    for (const project of projectArray) {
      result[project[1]] = {
        projectId: project[0],
        projectName: project[1],
        id: Number(project[2]),
      }
    }
    return  result;
  }


  private async getClusters(projectId: string, projectName: string): Promise<ClusterDetails[]> {
    const result: ClusterDetails[] = [];
    try {
      const containerListString = await executeCommand(`gcloud container clusters list`, this.log, this.log);
      const containerList = containerListString.split('\n')
        .filter(line => !/^NAME/.test(line))
        .map(line => line.replace(/  +/g, '|'))
        .map(line => line.split('|'))
        .filter(line => line[0]);
      for (const container of containerList) {
        result.push({
          clusterName: container[0],
          clusterRegion: container[1],
          projectId,
          projectName
        });
      }
    } catch (e) {
      return result;
    }
    return result;
  }

}

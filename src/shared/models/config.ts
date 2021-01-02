import { Project } from './project';
import { ClusterDetails } from './cluster-details';
import { SelectedCluster } from './selected-cluster';

export interface Config {
    projects: {
        [name: string]: Project;
    };
    clusters: ClusterDetails[];
    selectedCluster: SelectedCluster;
}

import Datastore from '@google-cloud/datastore'
import {IProject} from "../../model/IProject";

const datastore = new Datastore({});

export const listAllProjects = async (): Promise<IProject[]> => {

    const query = datastore.createQuery('Project')
        .limit(10000);

    const projectList: IProject[] = (await datastore.runQuery(query))[0] as IProject[];

    return projectList;
};

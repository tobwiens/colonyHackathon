import Datastore from '@google-cloud/datastore'
import {IProject} from "../../model/IProject";

const datastore = new Datastore({});

export const saveProject = async (project: IProject):Promise<IterableIterator<number>>  => {

    const key = datastore.key(['Project', `${project.colonyId}`]);

    const saveObject = {
        key: key,
        data: project,
    };

    const commitResult = await datastore.save(saveObject);

    return commitResult.keys()
};

import Datastore from '@google-cloud/datastore'
import {isIProject} from "../../model/IProjectHelpers";
import {IProject} from "../../model/IProject";

const datastore = new Datastore({});

export const getProjectDetails = async (projectId: string): Promise<IProject> => {

    const key = datastore.key(['Project', `${projectId}`]);

    const responseObject = (await datastore.get([key]))[0][0];

    console.log(`Retrieved project with id ${projectId} and got ${JSON.stringify(responseObject)}`);

    if(isIProject(responseObject)) {
        console.log(`Return IProject object: ${responseObject}`);
        return responseObject;
    } else
    {
        throw new Error(`Project with id ${projectId} not found`);
    }
};

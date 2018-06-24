import {ITask} from "../../model/ITask";
import Datastore = require("@google-cloud/datastore");

const datastore = new Datastore({});

export const listAllTasks = async (projectId: string): Promise<ITask[]> => {

    const query = datastore.createQuery('Task')
        .filter("projectId", projectId)
        .limit(10000);

    const taskList: ITask[] = (await datastore.runQuery(query))[0] as ITask[];

    console.log(`Got tasks for projectId: ${projectId}, result: ${JSON.stringify(taskList)}`);

    return taskList;
};

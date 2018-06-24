import Datastore from '@google-cloud/datastore'
import {ITask} from "../../model/ITask";

const datastore = new Datastore({});

export const saveTask = async (task: ITask):Promise<IterableIterator<number>>  => {

    const key = datastore.key(['Task', `${task.taskId}`]);

    const saveObject = {
        key: key,
        data: task,
    };

    const commitResult = await datastore.save(saveObject);

    return commitResult.keys()
};

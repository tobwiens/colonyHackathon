import {createColonyClient} from "../ColonyClientService";


export const createTaskInColony = async (colonyId: string, hash: string): Promise<string> => {
    console.log(`createTaskInColony`);

    const colonyClient = await createColonyClient(colonyId);

    console.log(`Got colony client and create task.`);

    const { eventData: { taskId } } = await colonyClient.createTask.send({
        specificationHash: hash
    });

    console.log(`Created task with taskId: ${taskId}`);

    return taskId;
};

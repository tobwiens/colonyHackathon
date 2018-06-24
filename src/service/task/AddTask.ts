import {createTaskInColony} from "../colony/task/CreateTaskInColony";
import {ITask} from "../../model/ITask";
import {saveTask} from "./CreateTaskDBEntry";

export const addTaskToProject = async (projectId :string, taskName: string, taskDescription: string): Promise<ITask> => {
    console.log(`addTaskToProject`);

    const taskId = await createTaskInColony(projectId, 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ');

    const taskObject: ITask =  {
        projectId: projectId,
        taskId: taskId,
        taskDescription: taskDescription,
        taskName: taskName,
        taskDocumentHash: 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ',
    };

    await saveTask(taskObject);

    return taskObject;
};

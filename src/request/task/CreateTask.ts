import express from 'express';
import {addTaskToProject} from "../../service/task";
import {ITask} from "../../model/ITask";


export const createTask = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        console.log("Create Task.");

        const taskName = request.query.taskName;

        const taskDescription = request.query.taskDescription;

        const projectId = request.query.projectId;

        const createdTask: ITask = await addTaskToProject(projectId, taskName, taskDescription)

        response.status(200).send(JSON.stringify(createdTask)).end();
    } catch (error) {
        console.log(`Error occurred ${error}`);
    }
};

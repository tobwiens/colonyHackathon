import express from 'express';
import {listAllTasks} from "../../service/task/ListTasks";


export const listTasksRequest = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const projectId = request.query.projectId;
        console.log(`Request tasks list for project ${projectId}.`);

        const tasks = await listAllTasks(request.query.projectId);

        console.log(`Return tasks: ${JSON.stringify(tasks)}`);

        response.status(200).send(JSON.stringify(tasks)).end();
    } catch (error) {
        console.log(`Error occurred ${error}`);
    }
};

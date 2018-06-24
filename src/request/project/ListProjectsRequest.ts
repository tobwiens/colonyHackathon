import express from 'express';
import {listAllProjects} from "../../service/project/ListProjects";


export const listPrrojectsRequest = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        console.log("Request project list.");

        const projects = await listAllProjects();

        response.status(200).send(JSON.stringify(projects)).end();
    } catch (error) {
        console.log(`Error occurred ${error}`);
    }
};

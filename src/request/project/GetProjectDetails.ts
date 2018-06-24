import express from 'express';
import {getProjectDetails} from "../../service/project/GetProjectDetails";
import {IProject} from "../../model/IProject";



export const getProjectDetailsRequest = async (request: express.Request, response: express.Response): Promise<void> => {
    try {
        const projectId = request.params.projectId;
        console.log(`Request project details from project with id ${projectId}.`);

        const projectDetails: IProject = await getProjectDetails(projectId);

        response.status(200).send(JSON.stringify( projectDetails)).end();
    } catch (error) {
        console.log(`Error occurred ${error}`);
    }
};

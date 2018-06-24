import express from 'express';
import {createColonyNetworkClientAndInit} from "./ColonyNetworkClientService";
import {createColony, createColonyToken} from "./ColonyCreateService";
import {saveProject} from "../project/CreateProjectDBEntry";
import {IProject} from "../../model/IProject";

export const createColonyTokenRequest = async (request : express.Request, response: express.Response): Promise<void> => {
    try {
        console.log("Request create colony token.");
        const colonyNetworkClient: any = await createColonyNetworkClientAndInit();
        const createdTokenAddress: string = await createColonyToken(colonyNetworkClient, "first colony", "FCLN");

        const {colonyId, colonyAddress} = await createColony(colonyNetworkClient, createdTokenAddress);

        const project: IProject = {
            colonyId: colonyId,
            colonyAddress: colonyAddress,
            projectName: `${request.query.projectName}`,
            projectDescription: `${request.query.projectDescription}`,
        };

        const keys = await saveProject(project);

        const responseObject =
            {
                statusText: `Colony Created! colony id ${colonyId} and colony address ${colonyAddress}. Project persisted with key: ${keys}`
            };

        response.status(200).send(JSON.stringify(responseObject)).end();
    } catch(error) {
        console.log(`Error occurred ${error}`);
    }
};

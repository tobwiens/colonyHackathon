import {createColonyNetworkClientAndInit} from "./ColonyNetworkClientService";


export const createColonyClient = async(colonyId: string): Promise<any> => {
    console.log(`createColonyClient`);
    const colonyNetworkClient: any = await createColonyNetworkClientAndInit();
    console.log(`Create colony network client and now retrieve colony cient for colony with id: ${colonyId}`);
    return await colonyNetworkClient.getColonyClient(Number(colonyId));
};

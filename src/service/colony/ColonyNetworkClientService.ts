import {getEthersAdapter} from "./EthersAdapterService";
// Import the ColonyNetworkClient
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

export const createColonyNetworkClientAndInit = async () => {
    const ethersAdapter = await getEthersAdapter();

    // Connect to ColonyNetwork with the adapter!
    const networkClient = new ColonyNetworkClient({ adapter: ethersAdapter });
    await networkClient.init();

    return networkClient;
};

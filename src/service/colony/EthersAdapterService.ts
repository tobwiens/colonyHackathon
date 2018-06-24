const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

const TEST_HOST = 'http://5.9.49.182:3030';

// Create an instance of the Trufflepig contract loader
const loader = new TrufflepigLoader({ endpoint: `${TEST_HOST}/contracts?name=%%NAME%%&address=%%ADDRESS%%&version=%%VERSION%%` });

// Create a provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://5.9.49.182:8545/');

export const getEthersAdapter = async () => {
        // Get the private key from the first account from the ganache-accounts
        // through trufflepig
        const  privateKey  = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

        // Create a wallet with the private key (so we have a balance we can use)
        const wallet = new Wallet(privateKey, provider);

        // Create an adapter (powered by ethers)
        const adapter = new EthersAdapter({
            loader,
            provider,
            wallet,
        });

        return adapter;
};


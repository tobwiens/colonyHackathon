

export const createColonyToken = async (networkClient: any, colonyName: string, tokenSymbol: string): Promise<string> => {
    // Let's deploy a new ERC20 token for our Colony.
    // You could also skip this step and use a pre-existing/deployed contract.
    const tokenAddress: string = await networkClient.createToken({
        name: colonyName,
        symbol:  tokenSymbol,
    });

    console.log(`Created token ${tokenAddress} with name ${colonyName} with symbol ${tokenSymbol}`);

    return tokenAddress;
};

export const createColony = async (networkClient: any, tokenAddress: string): Promise<{colonyId: number, colonyAddress: string}> => {
    console.log(`Create a colony with token address: ${tokenAddress}`);
    const {
        eventData: { colonyId, colonyAddress },
    } = await networkClient.createColony.send({ tokenAddress });

    // Congrats, you've created a Colony!
    console.log('Colony ID: ' + colonyId);
    console.log('Colony address: ' + colonyAddress);

    return {colonyId, colonyAddress};
};

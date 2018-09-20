import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.ENDPOINT;
const masterKey = process.env.MASTERKEY;

class CosmosDB extends CosmosClient {
    constructor() {
        super({ endpoint, auth: { masterKey }});
    }
}

export default CosmosDB;


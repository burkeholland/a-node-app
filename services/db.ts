import { CosmosClient } from '@azure/cosmos';
import { endpoint, masterKey } from './config';

const client = new CosmosClient({ endpoint, auth: { masterKey } });

export default client;

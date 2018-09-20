import CosmosDB from './cosmos';

const north = new CosmosDB();

const customers = {
    async get()  {
        return await north.database('wind').container('customers').items.readAll().toArray();
    }
};

export default customers;


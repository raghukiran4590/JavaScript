const { MongoClient } = require('mongodb');
// Connection string
const connectionString = 'mongodb://SrcTopology:8ZY%23REBX3@adocdb-psehub-02prd31.cnvldoeqeeyl.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=/Users/AF35861/Downloads/global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false&tlsAllowInvalidHostnames=true&directConnection=true';
const client = new MongoClient(connectionString);

async function runCommand(dbName, commandDocument) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.command(commandDocument);
    console.log(result);
  } catch (error) {
    console.error('Error running command:', error);
  } finally {
    await client.close();
  }
}

const dbName = 'admin';
const listCollectionsCommand = {
  listDatabases: 1
};
runCommand(dbName, listCollectionsCommand);
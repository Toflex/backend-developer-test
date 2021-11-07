import { MongoClient } from 'mongodb'
import config = require('config');

const host = config.get("mongodb.host")
const port = config.get("mongodb.port")
const dbName = config.get("mongodb.dbName")

// Connection URL
const url = `mongodb://${host}:${port}`;
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
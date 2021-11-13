import { Collection, MongoClient } from 'mongodb'
import config = require('config');

const host = config.get("mongodb.host")
const port = config.get("mongodb.port")
const dbName = config.get("mongodb.dbName")

// Connection URL
const url = `mongodb://${host}:${port}`;
export const client = new MongoClient(url);

// Collections
var userCol
var fixtureCol
var teamCol

export async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
 
  userCol = db.collection('users');
  fixtureCol = db.collection('fixtures');
  teamCol = db.collection('teams');

  // const collection = db.collection('test');

  // let id=uuid.v4()
  // const insertResult = await collection.insertOne({ name: "Shola", _id: id, email: "abc@mail.com" });
  // console.log('Inserted documents =>', insertResult);

  // var data = await collection.findOne({ _id: id });
  // console.log('Filter documents =>', data);

  // data = await collection.count({ "name": "Bola" });
  // console.log('Filter documents =>', data);

  return 'Mongodb connected successfully.';
}

export {userCol, fixtureCol, teamCol}
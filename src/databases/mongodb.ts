import dotenv from "dotenv";

import { MongoClient } from "mongodb";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db: any;
mongoClient
  .connect()
  .then(() => {
    db = mongoClient.db("myfoods");
  })

export { db };

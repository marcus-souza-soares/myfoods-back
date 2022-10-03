const supertest = require("supertest");
const app = require("../../src/server.js");
const { MongoClient } = require("mongodb");

let client;
let db;

beforeAll(async () => {
  client = await MongoClient.connect(process.env.DATABASE_URL);
  db = await client.db("myfoods");
  await db.collection("teste").drop();
},10000);


describe("dvsdvvxcv", () => {
  it("xcvxcvxcv", async () => {
    const dados = await supertest(app).get("/revenues");
    expect(dados.body).toBeInstanceOf(Array);
  }, 30000);
});

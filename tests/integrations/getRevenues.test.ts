import supertest from "supertest";
import app from "../../src/server.js";
import { prisma } from "../../src/databases/prismaCliente.js";

beforeAll(async () => {
  // const users = await prisma.teste.findMany();
  // console.log(users);
});

describe("dvsdvvxcv", () => {
  it("xcvxcvxcv", async () => {
    const dados = await supertest(app).get("/revenues");
    expect(dados.body).toBeInstanceOf(Array);
  });
});

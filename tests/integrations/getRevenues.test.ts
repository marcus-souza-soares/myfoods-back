import supertest from "supertest";
import app from "../../src/server.js";
import { prisma } from "../../src/databases/prismaCliente.js";
import { makeRevenue } from "../factory/revenueFactory.js";
import { makeUser } from "../factory/userFactory.js";
import { makeToken } from "../factory/tokenFactory.js";
import dotenv from "dotenv";
dotenv.config();

afterEach(async () => {
  await prisma.revenues.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.users.deleteMany();
  console.log(process.env.DATABASE_URL);
}, 10000);

describe("Teste na roda de receitas", () => {
  it("Pega uma lista com todas as receitas", async () => {
    const dados = await supertest(app).get("/revenues");
    expect(dados.body).toBeInstanceOf(Array);
  });

  it("Insere uma receita", async () => {
    const revenue = await makeRevenue();

    const user = makeUser();
    const _user = await prisma.users.create({
      data: user,
    });
    const token = makeToken(_user);
    console.log(revenue);

    const result = await supertest(app)
      .post("/revenue/insert")
      .set("Authorization", `Bearer ${token}`)
      .send(revenue);
    expect(result.status).toBe(201);
  }, 10000);
});

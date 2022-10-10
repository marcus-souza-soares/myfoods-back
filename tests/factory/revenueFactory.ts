import { faker } from "@faker-js/faker";
import { prisma } from "../../src/databases/prismaCliente";
import { makeCatergoy } from "./categoryFactory";
import { makeUser } from "./userFactory";

export async function makeRevenue() {
  const category = makeCatergoy();
  await prisma.categories.create({
    data: category,
  });
  const _category = await prisma.categories.findFirst({
    where: {
      name: category.name,
    },
  });

  const user = makeUser();
  await prisma.users.create({
    data: user,
  });
  const _user = await prisma.users.findFirst({
    where: {
      email: user.email,
    },
  });

  return {
    nome: faker.fake.name,
    categoryId: _category.id,
    userId: _user.id,
    secao: [
      {
        nome: "ingredientes",
        conteudo: ["asdasd", "sdfdsfsd"],
      },
      {
        nome: "modo de preparo",
        conteudo: ["asdasd", "sdfdsfsd"],
      },
    ],
    imageURL: faker.internet.url(),
  };
}

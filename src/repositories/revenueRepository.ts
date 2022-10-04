import { prisma } from "../databases/prismaCliente.js";
import { db } from "../databases/mongodb.js";

export async function findAll() {
  return prisma.revenues.findMany();
}

export async function findByUser(userId: string) {
  return prisma.revenues.findMany({
    where: {
      userId,
    },
  });
}

export async function findByCategoryId(id: string) {
  const result = prisma.revenues.findMany({
    where: {
      categoryId: id,
    },
  });
  return result;
}

import { prisma } from "../databases/prismaCliente.js";
import { Revenue } from "../types/revenueTypes.js";

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
export async function getMyRevenues(userId: string) {
  return await prisma.revenues.findMany({
    where: {
      userId,
    },
  });
}
export async function findById(id: string) {
  return await prisma.revenues.findUnique({
    where: {
      id,
    },
  });
}
export async function getByData(data: Partial<Revenue>) {
  return await prisma.revenues.findFirst({
    where: data,
  });
}
export async function create(data: Omit<Revenue, "id">) {
  return await prisma.revenues.create({
    data,
  });
}

export async function searchList(name: string) {
  return await prisma.revenues.findMany({
    where: {
      nome: {
        contains: name,
        mode: "insensitive",
      },
    },
    take: 5,
    orderBy: {
      nome: "asc",
    },
  });
}

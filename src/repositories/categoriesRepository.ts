import { prisma } from "../databases/prismaCliente.js";

export async function getCategories() {
  return await prisma.categories.findMany();
}
export async function findById(categoryId: string) {
  return await prisma.categories.findFirst({
    where: {
      id: categoryId,
    },
  });
}

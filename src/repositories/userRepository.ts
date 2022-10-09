import { User } from "../types/userTypes";
import { prisma } from "../databases/prismaCliente.js";

export async function register(user: Omit<User, "id">) {
  return await prisma.users.create({
    data: { ...user },
  });
}

export async function findUserByEmail(email: string) {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
}

export async function findUserById(id: string) {
  return await prisma.users.findUnique({
    where: {
      id,
    },
  });
}

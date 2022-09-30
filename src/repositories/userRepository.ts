import { Register } from "../types/userTypes";
import { prisma } from "../databases/prismaCliente.js";

export async function register(user: Omit<Register, "confirmPassword">){
  await prisma.users.create({
    data: { ...user }
  });
}

export async function findUserByEmail(email: string) {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
}

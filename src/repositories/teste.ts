import { prisma } from "../databases/prismaCliente.js";

export async function findUserByEmail(email) {
  const user = await prisma.users.findFirst({
    where: {
      email
    }
  })
  console.log(user)
}


findUserByEmail("teste@yahoo.com");
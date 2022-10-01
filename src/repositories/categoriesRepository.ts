import {prisma} from "../databases/prismaCliente.js";

export async function getCategories(){
  return await prisma.categories.findMany();
}
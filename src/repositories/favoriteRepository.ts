import { prisma } from "../databases/prismaCliente.js";
import { Favorite } from "../types/favoriteTypes.js";

export async function getfavorite(data: Omit<Favorite, "id">) {
  const result = await prisma.favorites.findFirst({
    where: {
      revenueId: data.revenueId,
      userId: data.userId,
    },
  });
  return result;
}

export async function addfavorite(data: Omit<Favorite, "id">) {
  const result = await prisma.favorites.create({
    data: {
      revenueId: data.revenueId,
      userId: data.userId,
    },
  });
  return result;
}

export async function removefavorite(data: Omit<Favorite, "id">) {
  const favorite = await getfavorite(data);
  const result = await prisma.favorites.delete({
    where: {
      id: favorite.id,
    },
  });
  return result;
}

export async function getFavoriteRevenues(userId: string) {
  return prisma.favorites.findMany({
    where: {
      userId,
    },
    include: {
      revenues: true,
    },
  });
}

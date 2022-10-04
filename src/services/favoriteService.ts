import * as favoriteRepository from "../repositories/favoriteRepository.js";
import { Favorite } from "../types/favoriteTypes";

export async function getFavorite(data: Omit<Favorite, "id">) {
  return await favoriteRepository.getfavorite(data);
}

export async function addFavorite(data: Omit<Favorite, "id">) {
  const favorite = await getFavorite(data);
  if (!!favorite)
    throw {
      code: "Exists",
      message: "Não foi possível atender essa requisição!",
    };
  return await favoriteRepository.addfavorite(data);
}

export async function removeFavorite(data: Omit<Favorite, "id">) {
  const favorite = await getFavorite(data);
  if (!favorite)
    throw {
      code: "Exists",
      message: "Não foi possível atender essa requisição!",
    };
  return await favoriteRepository.removefavorite(data);
}

export async function getFavoriteRevenues(userId: string) {
  return await favoriteRepository.getFavoriteRevenues(userId);
}

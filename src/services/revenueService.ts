import * as revenueRepository from "../repositories/revenueRepository.js";
import * as categoryService from "../services/categoriesService.js";
import * as userService from "./userService.js";
import * as favoriteService from "./favoriteService.js";

export async function getAll() {
  return await revenueRepository.findAll();
}

export async function getByCategoryId(categoryId: string) {
  const findCategory = await categoryService.getById(categoryId);
  if (!findCategory)
    throw {
      code: "NotFound",
      message: "Não existem receitas relacionadas a essa categoria!",
    };
  return revenueRepository.findByCategoryId(categoryId);
}
export async function getFavorites(userId: string) {
  const user = await userService.getUserById(userId);
  if (!user) throw { code: "NotFound", message: "Ususário não encontrado " };
  return await favoriteService.getFavoriteRevenues(userId);
}
export async function getMyRevenues(userId: string) {
  const user = await userService.getUserById(userId);
  if (!user) throw { code: "NotFound", message: "Ususário não encontrado " };
  return await revenueRepository.getMyRevenues(userId);
}


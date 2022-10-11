import * as revenueRepository from "../repositories/revenueRepository.js";
import * as categoryService from "../services/categoriesService.js";
import * as userService from "./userService.js";
import * as favoriteService from "./favoriteService.js";
import { Revenue } from "../types/revenueTypes.js";

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

export async function getById(revenueId: string) {
  const revenue = await revenueRepository.findById(revenueId);
  if (!revenue) throw { code: "NotFound", message: "Receita não encontrada!" };
  return revenue;
}
export async function create(data: Revenue) {
  const find = await getRevenues(data);
  if (!!find) throw { code: "NotAllowed", message: "Receita já cadastrada!" };
  return await revenueRepository.create(data);
}
export async function getRevenues(data: Partial<Revenue>) {
  return await revenueRepository.getByData(data);
}

export async function searchList(name: string) {
  return await revenueRepository.searchList(name);
}
export async function deleteRevenue(revenueId: string, userId: string) {
  const find = revenueRepository.findById(revenueId);
  if (!find) throw { code: "NotFound", message: "Essa receita não existe!" };
  const favorite = await favoriteService.getFavorite({ revenueId, userId });
  if (!!favorite) await favoriteService.removeFavorite({ revenueId, userId });
  return await revenueRepository.deleteRevenueById(revenueId);
}

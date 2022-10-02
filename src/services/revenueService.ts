import * as revenueRepository from "../repositories/revenueRepository.js";
import * as categoryService from "../services/categoriesService.js";

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

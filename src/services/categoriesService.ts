import * as categoriesRepository from "../repositories/categoriesRepository.js";

export async function getCategories(){
  return await categoriesRepository.getCategories();
}
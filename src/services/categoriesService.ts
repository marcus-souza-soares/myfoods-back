import * as categoriesRepository from "../repositories/categoriesRepository.js";

export async function getCategories(){
  return await categoriesRepository.getCategories();
}
export async function getById(categoryId: string){
  return await categoriesRepository.findById(categoryId)
}
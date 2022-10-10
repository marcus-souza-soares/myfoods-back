import { Request, Response } from "express";
import * as revenueService from "../services/revenueService.js";


export async function getRevenues(req: Request, res: Response) {
  const revenues = await revenueService.getAll();
  res.send(revenues);
}
export async function getRevenuesByCategoryId(req: Request, res: Response) {
  const { id } = req.params;
  const revenues = await revenueService.getByCategoryId(id);
  res.send(revenues);
}
export async function getFavorites(req: Request, res: Response) {
  const user = res.locals.user;
  const revenues = await revenueService.getFavorites(user.id);
  return res.send(revenues);
}

export async function getMyRevenues(req: Request, res: Response) {
  const user = res.locals.user;
  const revenues = await revenueService.getMyRevenues(user.id);
  return res.send(revenues);
}

export async function getById(req: Request, res: Response) {
  const { revenueId } = req.params;
  const revenue = await revenueService.getById(revenueId);
  res.send(revenue);
}
export async function create(req: Request, res: Response){
  const data = req.body;
  await revenueService.create(data);
  return res.status(201).send("Cadastrou!")
}

export async function getSearch(req: Request, res: Response){
  const { name } = req.params;
  const result = await revenueService.searchList(name);
  res.send(result)
}
export async function deleteRevenue(req: Request, res: Response){
  const { id } = req.params;
  await revenueService.deleteRevenue(id);
  res.send("ok");
}
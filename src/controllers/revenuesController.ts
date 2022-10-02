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

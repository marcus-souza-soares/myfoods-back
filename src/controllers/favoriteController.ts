import { Request, Response } from "express";
import * as favoriteService from "../services/favoriteService.js";

export async function getFavorites(req: Request, res: Response) {
  const { revenueId } = req.query;
  const user = res.locals.user;
  const favorite = await favoriteService.getFavorite({
    revenueId: revenueId.toString(),
    userId: user.id.toString(),
  });
  res.status(200).send(favorite);
}

export async function addFavorite(req: Request, res: Response) {
  const { revenueId } = req.query;
  const user = res.locals.user;
  await favoriteService.addFavorite({
    revenueId: revenueId.toString(),
    userId: user.id,
  });
  res.send("OK")
}

export async function removeFavorite(req: Request, res: Response) {
  const { revenueId } = req.query;
  const user = res.locals.user;
  await favoriteService.removeFavorite({
    revenueId: revenueId.toString(),
    userId: user.id,
  });
  res.send("OK")
}

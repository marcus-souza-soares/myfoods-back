import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function register(req: Request, res: Response) {
  const user = req.body;
  await userService.register(user);
  res.status(201).send("Ok");
}

export async function login(req: Request, res: Response){
  const user = req.body;
  await userService.login(user);
  res.status(200).send("Ok");
}
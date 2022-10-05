import { Request, Response } from "express";
import * as userService from "../services/userService.js";
import { Register, Login } from "../types/userTypes.js";

export async function register(req: Request, res: Response) {
  const user: Register = req.body;
  await userService.register(user);
  res.status(201).send("Ok");
}

export async function login(req: Request, res: Response) {
  const user: Login = req.body;
  const data = await userService.login(user);
  res.status(200).send(data);
}
export async function getUserById(req: Request, res: Response) {
  const { userId } = req.query;
  const user = await userService.getUserById(userId.toString());
  console.log(userId)
  return res.send(user);
}

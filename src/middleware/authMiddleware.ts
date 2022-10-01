import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) { 
    return res.status(401).send("Acesso não autorizado.");
  }
  console.log(token)
  const secret_key = process.env.JWT_SECRET;
  const user = jwt.verify(token, secret_key);
  if (!!user && !!token) {
    res.locals.user = user;
    next();
  } else {  
    res.status(404).send("Error ao validar o usuário");
  }
}
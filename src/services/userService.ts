import { Register, Login } from "../types/userTypes";
import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function register(user: Register) {
  const find = await userRepository.findUserByEmail(user.email);
  if (!!find) throw { code: "Exists", message: "Esse usuário já existe!" };
  return await userRepository.register({
    name: user.name,
    email: user.email,
    password: encriptPassword(user.password),
  });
}
export async function login(user: Login) {
  const find = await userRepository.findUserByEmail(user.email);
  if (!find || !comparePassword(user.password, find.password))
    throw { code: "NotFound", message: "Verifique os campos novamente!" };

  const token = buildToken(user);
  const { email, name, id } = find;
  return {
    user: {
      email,
      name,
      id,
    },
    token,
  };
}

function encriptPassword(pass: string) {
  const crypted_password = bcrypt.hashSync(pass, 6);
  return crypted_password;
}
function comparePassword(pass: string, userPass: string) {
  return bcrypt.compareSync(pass, userPass);
}

function buildToken(user: Login) {
  const jwtKey = process.env.JWT_SECRET;
  const config = { expiresIn: process.env.EXPIRES_TOKEN || "1h" };
  return jwt.sign(user, jwtKey, config);
}

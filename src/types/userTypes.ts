import { users } from "@prisma/client";

export type User = users;

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

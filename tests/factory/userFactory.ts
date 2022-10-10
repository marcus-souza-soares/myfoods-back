import { faker } from "@faker-js/faker";
import * as userService from "../../src/services/userService.js";

export function makeUser() {
  return {
    name: faker.fake.name,
    email: faker.internet.email(),
    password: userService.encriptPassword(faker.internet.password()),
  };
}

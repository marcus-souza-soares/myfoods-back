import * as userService from "../../src/services/userService.js";
import { User } from "../../src/types/userTypes.js";

export function makeToken(user: User) {
  return userService.buildToken(user);
}

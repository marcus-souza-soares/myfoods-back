import { Router } from "express";
import { register } from "../controllers/authController.js";
import { schemaValidate } from "../middleware/shemaValidate.js";
import { loginSchema, registerSchema } from "../schema/userSchema.js";

const authRouter = Router();
authRouter.post("/register", schemaValidate(registerSchema), register);
authRouter.post("/login", schemaValidate(loginSchema), register);
export { authRouter };

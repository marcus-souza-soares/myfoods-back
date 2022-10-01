import { Router } from "express";
import { authRouter } from "./userRouter.js";
import categoriesRouter from "./categoriesRouter.js";

const router = Router();
router.use(authRouter);
router.use(categoriesRouter);

export { router };

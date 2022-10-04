import { Router } from "express";
import { authRouter } from "./userRouter.js";
import categoriesRouter from "./categoriesRouter.js";
import revenueRouter from "./revenuesRouter.js";
import favoriteRouter from "./favoriteRouter.js";

const router = Router();
router.use(authRouter);
router.use(categoriesRouter);
router.use(revenueRouter);
router.use(favoriteRouter)

export { router };

import { Router } from "express";
import {
  getRevenues,
  getRevenuesByCategoryId,
  getFavorites,
  getMyRevenues
} from "../controllers/revenuesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const revenueRouter = Router();

revenueRouter.get("/revenues", getRevenues);
revenueRouter.get("/category/:id", getRevenuesByCategoryId);
revenueRouter.get("/revenues/favorites", authMiddleware, getFavorites);
revenueRouter.get("/revenues/personal", authMiddleware, getMyRevenues)

export default revenueRouter;
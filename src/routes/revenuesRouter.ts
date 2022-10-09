import { Router } from "express";
import {
  getRevenues,
  getRevenuesByCategoryId,
  getFavorites,
  getMyRevenues,
  getById,
  create,
  getSearch,
  deleteRevenue
} from "../controllers/revenuesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { schemaValidate } from "../middleware/shemaValidate.js";
import { revenueSchema } from "../schema/revenueSchema.js";

const revenueRouter = Router();

revenueRouter.get("/revenues", getRevenues);
revenueRouter.get("/category/:id", getRevenuesByCategoryId);
revenueRouter.get("/revenues/favorites", authMiddleware, getFavorites);
revenueRouter.get("/revenues/personal", authMiddleware, getMyRevenues);
revenueRouter.get("/revenue/:revenueId", getById);
revenueRouter.get("/search/:name", getSearch);
revenueRouter.post(
  "/revenue/insert",
  authMiddleware,
  schemaValidate(revenueSchema),
  create
);
revenueRouter.delete("/revenue/delete/:id", authMiddleware, deleteRevenue);

export default revenueRouter;

import { Router } from "express";
import {
  getRevenues,
  getRevenuesByCategoryId,
} from "../controllers/revenuesController.js";

const revenueRouter = Router();

revenueRouter.get("/revenues", getRevenues);
revenueRouter.get("/category/:id", getRevenuesByCategoryId);

export default revenueRouter;
import { Router } from "express";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoriteController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const favoriteRouter = Router();

favoriteRouter.get("/favorite", authMiddleware, getFavorites);
favoriteRouter.post("/favorite/add", authMiddleware, addFavorite);
favoriteRouter.delete("/favorite/remove", authMiddleware, removeFavorite);
export default favoriteRouter;

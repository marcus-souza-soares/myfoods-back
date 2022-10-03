import express from "express";
import { errorHandlingMiddleware } from "./middleware/errorMiddleware.js";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware);

module.exports = app;

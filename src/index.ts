import app from "./server.js";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(chalk.cyan("Server running on port: " + process.env.PORT));
});
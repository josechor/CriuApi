import express from "express";
import routes from "./frameworks/express/routes/index";
import { errorHandler } from "./frameworks/express/middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use("/api", routes);
// @ts-ignore
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

import express from "express";
import dotenv from "dotenv";
import { __dirname } from "./utils.js";
import homeRouter from "./routes/home.route.js";
import loginRoute from "./routes/login.ruote.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));

app.use("/", homeRouter);
app.use("/login", loginRoute);

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
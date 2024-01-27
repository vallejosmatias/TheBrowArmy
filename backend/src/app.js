import express from "express";
import dotenv from "dotenv";
import { __dirname } from "./utils.js";
import homeRouter from "./routes/home.route.js";
import loginRouter from "./routes/login.ruote.js";
import cursosRouter from "./routes/cursos.route.js";
import profileRouter from "./routes/profile.route.js";
import productosRouter from "./routes/productos.route.js";
import nosotrosRouter from "./routes/nosotros.route.js";
import handlebars from "express-handlebars";
import path from "path";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "handlebars");

app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/cursos", cursosRouter);
app.use("/nosotros", nosotrosRouter);
app.use("/productos", productosRouter);
app.use("/mis-compras", profileRouter);

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => {
    console.log("La conexion a fallado", error);
  });
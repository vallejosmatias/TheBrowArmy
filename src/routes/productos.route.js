import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   
    res.render("productos",{style:"/css/productos.css", title: "Productos", showHeaderAndMenu: true});
  });

export default router;
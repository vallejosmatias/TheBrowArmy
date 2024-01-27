import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   
    res.render("login",{style:"/css/login.css", title: "Inicio de sesión", js: "/js/login.js"});
  });

export default router;

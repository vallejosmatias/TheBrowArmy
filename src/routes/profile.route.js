import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   
    res.render("profile",{style:"/css/profile.css", title: "Mis Compras", showHeaderAndMenu: true});
  });

export default router;
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   
    res.render("nosotros",{style:"/css/nosotros.css", title: "Nosotros", showHeaderAndMenu: true});
  });

export default router;
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   
    res.render("cursos",{style:"/css/cursos.css", title:"Cursos", showHeaderAndMenu: true});
  });

export default router;
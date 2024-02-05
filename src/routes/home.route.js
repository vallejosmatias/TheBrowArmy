import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
   
    res.render("home",{title: "The Brow Army",showHeaderAndMenu:true});
  });

export default router;

import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>{
    res.render("hello wordl");
})

export default router;

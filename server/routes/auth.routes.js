import { Router } from "express";
import { singup, signin } from "../controllers/auth.js";

const router = Router();

router.post("/auth/signup", singup)
router.post("/auth/signin", signin)

export default router
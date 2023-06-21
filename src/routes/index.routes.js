import { Router } from "express";
import travelsRouter from "./travel.routes.js";

const router = Router()

router.use(travelsRouter)

export default router
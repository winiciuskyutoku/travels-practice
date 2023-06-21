import { Router } from "express";
import { getTravels } from "../controllers/travels.controllers.js";

const travelsRouter = Router()

travelsRouter.get("/passengers/travels", getTravels)

export default travelsRouter
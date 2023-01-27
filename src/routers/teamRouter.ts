import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation";

const teamRouter = Router()

teamRouter.post('/register/team',
    schemaValidation())

export default teamRouter

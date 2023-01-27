import { Router } from "express";
import fieldRouters from "./fieldsRouter";
import playerRouter from "./playersRouter";
import userRouter from "./userRouter";

const routers = Router()

routers
    .use(fieldRouters)
    .use(userRouter)
    .use(playerRouter)

export default routers
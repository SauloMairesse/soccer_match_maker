import { Router } from "express";
import fieldRouters from "./fieldsRouter";
import playerRouter from "./playersRouter";
import teamRouter from "./teamRouter";
import userRouter from "./userRouter";

const routers = Router()

routers.use(fieldRouters)
routers.use(userRouter)
routers.use(playerRouter)
routers.use(teamRouter)

export default routers
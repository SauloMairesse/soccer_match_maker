import { Router } from "express";
import fieldRouters from "./fieldsRouter";

const routers = Router()

routers.use(fieldRouters)

export default routers
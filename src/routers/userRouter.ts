import { Router } from "express";
import { signUp } from "../controllers/userController";
import { schemaValidation } from "../middlewares/schemaValidation";

import { createUserSchema } from "../types&schemas/user/schema";

const userRouter = Router()

userRouter.post('register/user',
    schemaValidation(createUserSchema), 
    signUp)

export default userRouter
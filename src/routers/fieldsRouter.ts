import { Router } from "express";
import { getAllFields, postField } from "../controllers/fieldControllers";
import { schemaValidation } from "../middlewares/schemaValidation";

import newFieldSchema from "../types&schemas/fields/schema";

const fieldRouters = Router()

fieldRouters.post('/register/field',
    schemaValidation(newFieldSchema), 
    postField)
fieldRouters.get('/field/all', getAllFields)

export default fieldRouters

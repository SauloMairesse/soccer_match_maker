import { Router } from "express";
import { getFields, postField } from "../controllers/fieldControllers";
import { schemaValidation } from "../middlewares/schemaValidation";

import newFieldSchema from "../types&schemas/fields/schema";

const fieldRouters = Router()

fieldRouters.post('/register/field',
    schemaValidation(newFieldSchema), 
    postField)
fieldRouters.get('/field/all', getFields)


export default fieldRouters

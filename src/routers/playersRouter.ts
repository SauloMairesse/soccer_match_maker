import { Router } from "express";

import { schemaValidation } from "../middlewares/schemaValidation";
import { postPlayer } from "../controllers/playerControllers";
import { createPlayer } from "../types&schemas/players/schema";

const playerRouter = Router()

playerRouter.post('/register/player',
    schemaValidation(createPlayer),
    postPlayer)
playerRouter.get('/teams/players/:teamId', )

export default playerRouter

import { Router } from "express";
import { getTeams, postNewTeam } from "../controllers/teamControllers";
import { schemaValidation } from "../middlewares/schemaValidation";
import { createTeamSchema } from "../types&schemas/teams/schema";

const teamRouter = Router()

teamRouter.post('/register/team',
    schemaValidation(createTeamSchema),
    postNewTeam)
teamRouter.get('/teams/all', getTeams)

export default teamRouter

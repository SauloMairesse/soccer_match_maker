import { Request, Response } from "express";
import { teamService } from '../services/teamService';

export async function postNewTeam(req: Request, res: Response) {
    const team = req.body
    
    const newTeam = await teamService.registerTeam(team)

    return res.status(200).send(newTeam)
}

export async function getTeams(req: Request, res: Response) {
    console.log('get teams')
    
    const teamsList = await teamService.getListTeams()

    return res.status(200).send(teamsList)
}
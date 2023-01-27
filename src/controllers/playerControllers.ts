import { Request, Response } from "express";
import { playerService } from "../services/playerService";

export async function postPlayer(req: Request, res: Response) {
    const player = req.body
    
    const newPlayer = await playerService.registerPlayer(player)

    return res.status(200).send(newPlayer)
}

export async function getPlayerByTeam(req: Request, res: Response) {
    const teamId = Number(req.params.teamId)
    
    const playersList = await playerService.playersByTeamId(teamId)

    return res.status(200).send(playersList)
}

import prisma from "../database/database";
import { Player } from "../types&schemas/players/types";

async function createPlayer(player: Player) {
    const newPlayer = await prisma.players.create({data: player})
    console.log('newPlayer :', newPlayer)
    
    return newPlayer
}

async function findPlayerByUserIdAndTeamId(player: Player) {
    const playerOnDB = await prisma.players.findFirst({where: player})
    console.log('player exist ?  :', playerOnDB)
    
    return playerOnDB
}

async function findPlayersByTeamId(teamId: number) {
    const playersList = await prisma.players.findMany({
        where: { teamId: teamId } 
    })
    console.log('players list : ', playersList)

    return playersList
}

export const playerRepository = { 
    createPlayer,
    findPlayerByUserIdAndTeamId,
    findPlayersByTeamId
}

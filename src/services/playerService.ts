import { playerRepository } from "../repositorys/playerRepository"
import { teamRepository } from "../repositorys/teamsRepository"
import { Player } from "../types&schemas/players/types"

async function registerPlayer(player: Player) {
    await validationPlayer(player)

    const newPlayer = await playerRepository.createPlayer(player)
    
    return newPlayer
}

async function playersByTeamId(teamId: number) {
    await validateTeamId(teamId)

    const playersList = await playerRepository.findPlayersByTeamId(teamId)

    return playersList
}

//VALIDATIONS 

async function validationPlayer(player: Player) {
    const playerOnDB = await playerRepository.findPlayerByUserIdAndTeamId(player)
    if(playerOnDB) {
        throw "player already exist"
    }
}

async function validateTeamId(teamId: number) {
    const team = await teamRepository.findTeamById(teamId)
    if(team) {
        throw "team does not exist"
    }
}

export const playerService = {
    registerPlayer,
    playersByTeamId
}

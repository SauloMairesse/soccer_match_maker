import { teamRepository } from "../repositorys/teamsRepository"
import { Team } from "../types&schemas/teams/types"

async function registerTeam(team: Team) {
    await validadeTeamName(team.name)

    const newTeam = await teamRepository.createNewTeam(team)
     
    return newTeam
}

async function getListTeams() {
    const listTeams = await teamRepository.findAllTeams()
     
    return listTeams
}

//VALIDATIONS 

async function validadeTeamName(name: string) {
    const team = await teamRepository.findTeamByName(name)
    if(team){
        throw 'this name is already registred '
    }
}

export const teamService = {
    registerTeam,
    getListTeams
}
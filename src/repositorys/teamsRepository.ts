import prisma from "../database/database";
import { Team } from "../types&schemas/teams/types";

async function findTeamById(id: number) {
    const team = await prisma.teams.findUnique({ 
        where: {id: id} 
    })
    console.log('team By Id :', id)
    
    return team
}

async function findTeamByName(name: string) {
    const team = await prisma.teams.findFirst({ 
        where: {name: name} 
    })
    console.log('team By Name :', name)
    
    return team
}

async function createNewTeam(team: Team) {
    const newTeam = await prisma.teams.create({data: team})
    console.log('new Team : ', newTeam)

    return newTeam
}

//ENCONTRAR TODOS EXCETO O MEU PROPRIO TIME
async function findAllTeams() {
    const teamList = await prisma.teams.findMany()
    console.log('team List :', teamList)

    return teamList
}

export const teamRepository = {
    findTeamById,
    createNewTeam,
    findTeamByName,
    findAllTeams
}
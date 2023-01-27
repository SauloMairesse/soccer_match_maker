import prisma from "../database/database";

async function findTeamById(id: number) {
    const team = await prisma.teams.findUnique({ 
        where: {id: id} 
    })
    console.log('team By Id :', id)
    
    return team
}

export const teamRepository = {
    findTeamById,
}
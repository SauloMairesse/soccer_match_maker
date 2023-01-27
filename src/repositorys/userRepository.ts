import prisma from "../database/database";
import { User } from "../types&schemas/user/types";

async function createUser(user: User) {
    const newUser = await prisma.users.create({ data: user})
    console.log('new USER Repository :', newUser)
    
    return newUser
}

async function findUserByEmail(email: string) {
    const user = await prisma.users.findFirst({
        where: { email: email } 
    })
    console.log('user by Email Repository :', user)
    
    return user
}

export const userRepository = {
    createUser,
    findUserByEmail
}
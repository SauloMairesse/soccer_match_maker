import prisma from "../database/database";
import { User } from "../types&schemas/user/type";

async function createUser(user: User) {
    const newUser = await prisma.users.create({ data: user})
    console.log('new USER Repository :', newUser)
    
    return newUser
}

export const userRepository = {
    createUser,
}
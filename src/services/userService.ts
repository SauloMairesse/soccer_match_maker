import bcrypt from 'bcrypt'

import { userRepository } from "../repositorys/userRepository"
import { User } from "../types&schemas/user/types"

async function registerUser(user: User) {
    await validateUniqueEmail(user.email)

    const newUser = await userRepository.createUser({
        ...user,
        password: bcrypt.hashSync(user.password, 10)
    });

    return newUser
}

async function validateUniqueEmail(email: string) {
    const user = await userRepository.findUserByEmail(email)
    if(user) {
        throw 'USUARIO JA EXISTE'
    }
}

export const userService = {
    registerUser,
}
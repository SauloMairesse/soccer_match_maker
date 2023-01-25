import { userRepository } from "../repositorys/userRepository"
import { User } from "../types&schemas/user/type"

async function registerUser(user: User) {
    const newUser = await userRepository.createUser(user);
    
    return newUser
}

export const userService = {
    registerUser,
}
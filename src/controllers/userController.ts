import { Request, Response } from "express";
import { userService } from "../services/userService";

export async function signUp(req: Request, res: Response) {
    const user = req.body
    console.log('novo usuario :', user)
    
    const newUser = await userService.registerUser(user)

    return res.status(200).send(newUser)
}
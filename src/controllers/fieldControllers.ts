import { Request, Response } from "express";
import { fieldService } from "../services/fieldService";

export async function postField(req: Request, res: Response) {
    const field = req.body
    
    const newField = await fieldService.registerField(field)

    return res.status(200).send(newField)
}

export async function getAllFields(req: Request, res: Response) {
    
    const newField = await fieldService.listFields()

    return res.status(200).send(newField)
}
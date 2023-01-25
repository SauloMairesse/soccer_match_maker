import { Request, Response } from "express";
import { fieldService } from "../services/fieldService";

export async function postField(req: Request, res: Response) {
    const field = req.body
    
    const newField = await fieldService.registerField(field)

    return res.status(200).send(newField)
}

export async function getFields(req: Request, res: Response) {
    
    const fieldList = await fieldService.getAllFields()

    return res.status(200).send(fieldList)
}
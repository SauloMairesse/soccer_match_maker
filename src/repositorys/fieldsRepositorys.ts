import prisma from "../database/database";
import { Field } from "../types&schemas/fields/types";

async function createField(field: Field) {
    const newField = await prisma.fields.create({data: field})
    console.log('newField Repository :', newField)
    
    return newField
}

export const fieldRepository = {
    createField,
}
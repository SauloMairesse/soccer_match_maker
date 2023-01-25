import prisma from "../database/database";
import { Field } from "../types&schemas/fields/types";

async function createField(field: Field) {
    const newField = await prisma.fields.create({data: field})
    console.log('newField Repository :', newField)
    
    return newField
}

async function findAllFields() {
    const fields = await prisma.fields.findMany()
    console.log('list of fields :', fields)
    
    return fields
}

export const fieldRepository = {
    createField,
    findAllFields
}
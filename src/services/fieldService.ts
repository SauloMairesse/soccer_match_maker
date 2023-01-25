import { fieldRepository } from "../repositorys/fieldsRepositorys"
import { Field } from "../types&schemas/fields/types"

async function registerField(field: Field) {
    const newField = await fieldRepository.createField(field) 
    
    return newField
}

export const fieldService = {
    registerField,
}
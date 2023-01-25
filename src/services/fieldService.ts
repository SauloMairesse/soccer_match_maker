import { fieldRepository } from "../repositorys/fieldsRepository"
import { Field } from "../types&schemas/fields/types"

async function registerField(field: Field) {
    const newField = await fieldRepository.createField(field) 
    
    return newField
}

async function getAllFields() {
    const newField = await fieldRepository.findAllFields()
    
    return newField
}

export const fieldService = {
    registerField,
    getAllFields
}
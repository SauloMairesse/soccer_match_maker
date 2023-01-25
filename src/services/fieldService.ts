import { fieldRepository } from "../repositorys/fieldsRepositorys"
import { Field } from "../types&schemas/fields/types"

async function registerField(field: Field) {
    const newField = await fieldRepository.createField(field) 
    
    return newField
}

async function listFields() {
    const fields = await fieldRepository.findAllFields()
    
    return fields
}

export const fieldService = {
    registerField,
    listFields
}
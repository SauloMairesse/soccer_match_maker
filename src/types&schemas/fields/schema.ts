import Joi from "joi";

export const newFieldSchema = Joi.object({
    cep: Joi.string()
        .pattern(new RegExp(/^[0-9]{5}-[\d]{3}$/))
        .required(),
    image: Joi.string()
        .uri()
        .required(),
    category: Joi.string()
        .required(), //publica ou privada
    price: Joi.number()
        .integer()
        .required()
})

export default newFieldSchema
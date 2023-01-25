import Joi from "joi";

export const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().max(50).required(),
    password: Joi.string().min(6).required(),
  });
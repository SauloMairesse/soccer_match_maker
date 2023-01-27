import Joi from "joi";

export const createTeamSchema = Joi.object({
    name: Joi.string().max(50).required(),
    emblem: Joi.string().required(),
    captainId: Joi.number().required()
  });
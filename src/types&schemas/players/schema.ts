import Joi from "joi";

export const createPlayer = Joi.object({
    playerId: Joi.number().integer().required(),
    teamId: Joi.number().integer().required()
  });
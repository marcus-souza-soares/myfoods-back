import joi from "joi";

export const revenueSchema = joi.object({
  categoryId: joi.string().required(),
  nome: joi.string().required(),
  imageURL: joi.string().uri().required(),
  userId: joi.string().required(),
  secao: joi.array().required(),
});

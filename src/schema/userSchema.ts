import joi from "joi";

const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().required(),
});

const loginSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password"),
});

export { registerSchema, loginSchema };

import joi from "joi";

const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().required(),
  confirmPassword: joi.ref("password"),
});

const loginSchema = joi.object({
  email: joi.string().email(),
  password: joi.string().required(),
});

export { registerSchema, loginSchema };

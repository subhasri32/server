const Joi = require("joi");

const schema = {
  registerSchema: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
  }),
  loginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
  }),
  QuestionsSchema: Joi.object({
    Question: Joi.string().max(100).required(),
    explanation: Joi.string().max(250).required(),
  }),
  AnswersSchema: Joi.object({
    Answers:Joi.string().max(100).required(),
  }),
  CommentsSchema:Joi.object({
    PostedBy:Joi.string().required(),
    comments:Joi.string().max(200).required(),
  }),             
};

module.exports = schema;

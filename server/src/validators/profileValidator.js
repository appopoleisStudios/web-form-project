const Joi = require('joi');

const profileSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  spokenLanguages: Joi.array().items(Joi.string()).min(1).required(),
  codingLanguages: Joi.object().pattern(
    Joi.string(),
    Joi.string().valid('beginner', 'intermediate', 'advanced')
  ).required(),
  yearsExperience: Joi.number().integer().min(0).required(),
  blockchainExperience: Joi.string().valid('none', 'beginner', 'intermediate', 'advanced').required()
});

module.exports = { profileSchema };

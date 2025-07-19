import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.number()
    .integer()
    .positive()
    .min(6)
    .max(16)
    .required()
    .messages({
      'number.base': '"phoneNumber" must be a number',
      'number.integer': '"phoneNumber" must be an integer',
      'number.positive': '"phoneNumber" must be a positive number',
      'number.min': '"phoneNumber" must be at least 6 digits',
      'number.max': '"phoneNumber" must be no more than 16 digits',
      'any.required': '"phoneNumber" is a required field',
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.base': '"email" must be a string',
      'string.email':
        '"email" must be a valid email address ending in .com or .net',
      'any.required': '"email" is a required field',
    }),

  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': '"isFavourite" must be a boolean value (true or false)',
  }),

  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .lowercase()
    .default('personal')
    .required()
    .messages({
      'string.base': '"contactType" must be a string',
      'any.only': '"contactType" must be one of: work, home, personal',
      'any.required': '"contactType" is a required field',
    }),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(20).message({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
  }),
  phoneNumber: Joi.number().integer().positive().min(6).max(16).message({
    'number.base': '"phoneNumber" must be a number',
    'number.integer': '"phoneNumber" must be an integer',
    'number.positive': '"phoneNumber" must be a positive number',
    'number.min': '"phoneNumber" must be at least 6 digits',
    'number.max': '"phoneNumber" must be no more than 16 digits',
  }),
  email: Joi.string().email().message({
    'string.base': '"email" must be a string',
    'string.email':
      '"email" must be a valid email address ending in .com or .net',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': '"isFavourite" must be a boolean value (true or false)',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .lowercase()
    .messages({
      'string.base': '"contactType" must be a string',
      'any.only': '"contactType" must be one of: work, home, personal',
      'any.required': '"contactType" is a required field',
    }),
});

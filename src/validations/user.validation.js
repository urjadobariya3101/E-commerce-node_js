const Joi = require("joi");

/* Create user */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    address: Joi.string().required().trim()
  }),
};

/* Get user list */
const getUserList = {
  query: Joi.object().keys(),
};

/* Get user details by Id */
const getUserById = {
  params: Joi.object().keys(),
};

/* User details update by Id */
const updateUser = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_no: Joi.number().integer().required(),
    adress: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
};

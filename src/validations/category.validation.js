const Joi = require("joi");

/* Create Category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_dis: Joi.string().required().trim(),
  }),
};

/* Get category list */
const getCategoryList = {
  query: Joi.object().keys(),
};

/* Get category details by id */
const getCategoryDetails = {
  params: Joi.object().keys(),
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryDetails
};

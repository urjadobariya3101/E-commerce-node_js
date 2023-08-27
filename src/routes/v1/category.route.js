const express = require('express');
const { categoryValidation } = require('../../validations');
const { categoryController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/* Create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/* Get category details by ID */
router.get(
    "/list/:categoryId",
    validate(categoryValidation.getCategoryDetails),
    categoryController.getCategoryDetails
);

/* Delete category */
router.delete(
    "/delete-category/:categoryId",
    validate(categoryValidation.getCategoryDetails),
    categoryController.deleteCategory
);



module.exports = router;
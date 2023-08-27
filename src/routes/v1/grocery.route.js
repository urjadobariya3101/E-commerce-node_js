const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create grocery */
router.post(
    "/create-grocery",
    validate(groceryValidation.createGrocery),
    groceryController.createGrocery
);

/* Get grocery details by ID */
router.get(
    "/list/:groceryId",
    validate(groceryValidation.getGroceryById),
    groceryController.getGroceryById
);

/* Delete grocery */
router.delete(
    "/delete-grocery/:groceryId",
    validate(groceryValidation.getGroceryById),
    groceryController.deleteGrocery
);


module.exports = router;
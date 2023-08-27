const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create User */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/* Get user details by ID */
router.get(
    "/list/:userId",
    validate(userValidation.getDetails),
    userController.getUserDetails
);

/* Delete user */
router.delete(
    "/delete-user/:userId",
    validate(userValidation.getDetails),
    userController.deleteUser
);


module.exports = router;
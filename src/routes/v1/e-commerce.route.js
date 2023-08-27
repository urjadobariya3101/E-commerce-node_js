const express = require("express");
const { EcommerceController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Get all list */
router.get(
    "/all-list",
     validate(EcommerceController.getAllList)
);

module.exports = router;

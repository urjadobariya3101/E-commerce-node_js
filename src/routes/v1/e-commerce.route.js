const express = require("express");
const { EcommerceController } = require("../../controllers");

const router = express.Router();

/* Get all list */
router.get(
    "/all-list",
     EcommerceController.getAllList
);

module.exports = router;

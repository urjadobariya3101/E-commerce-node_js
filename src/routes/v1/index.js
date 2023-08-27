const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const groceryRoute = require("./grocery.route");
const EcommerceRoute = require("./e-commerce.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/grocery", groceryRoute);
router.use("/all-data", EcommerceRoute);

module.exports = router;

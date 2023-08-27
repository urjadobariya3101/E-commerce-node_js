const {
  userService,
  categoryService,
  groceryService
} = require("../services");

/** Get E-commer list */
const getAllList = async (req, res) => {
  try {
    const userList = await userService.getUserList();
    const categoryList = await categoryService.getCategoryList();
    const groceryList = await groceryService.getGrocerylList();

    res.status(200).json({
      success: true,
      message: "Get E-commers list successfully!",
      data: { userList, categoryList, groceryList },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getAllList };

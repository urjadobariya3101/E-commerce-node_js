const { groceryService } = require("../services");

/* Create grocery */
const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;

    const grocery = await groceryService.createGrocery(reqBody);
    if (!grocery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Grocery create  successfully!",
      data: { grocery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get grocery details by id */
const getGroceryById = async (req, res) => {
  try {
    const getById = await groceryService.getGroceryById(req.params.groceryId);
    if (!getById) {
      throw new Error("Grocery not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Grocery details get successfully!",
      data: getById,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Delete grocery */
const deleteGrocery = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExists = await groceryService.getGroceryById(groceryId);
    if (!groceryExists) {
      throw new Error("Grocery not found!");
    }

    await groceryService.deleteGrocery(groceryId);

    res.status(200).json({
      success: true,
      message: "Grocery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGrocery,
  getGroceryById,
  deleteGrocery
};

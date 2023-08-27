const { Grocery } = require("../models");

/* Create grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}  */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

/* Get grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Grocery>} */
const getGrocerylList = async () => {
  return Grocery.find();
};

/* Get grocery details by id
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>} */
const getGroceryById = async (groceryId) => {
  return Grocery.findById(groceryId);
};

/* grocery details update by id
 * @param {ObjectId} groceryId
 * @param {object} updateBody
 * @returns {Promise<Grocery>} */
const updateGrocery = async (groceryId, updateBody) => {
  return Grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
};

/* Delete grocery
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>} */
const deleteGrocery = async (groceryId) => {
  return Grocery.findByIdAndDelete(groceryId);
};

module.exports = {
  createGrocery,
  getGrocerylList,
  getGroceryById,
  updateGrocery,
  deleteGrocery,
};

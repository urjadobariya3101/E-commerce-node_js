const { User } = require("../models");

/* Create user
 * @param {object} reqBody
 * @returns {Promise<user>} */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/* Get User list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>} */
const getUserList = async () => {
  return User.find();
};

/* Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>} */
const getUserById = async (userId) => {
  return User.findById(userId);
};

/* user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<User>} */
const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/* Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>} */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  deleteUser,
};

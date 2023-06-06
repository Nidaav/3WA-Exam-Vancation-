const userRepo = require("../repositories/userRepository");

const getAllUsers = async () => {
  const res = await userRepo.getAllUsers();
  return res
};

const createUser = async (newUser) => {
  const createdUser = await userRepo.createNewUser(newUser);
  return createdUser;
};

const getUserByEmail = async (email) => {
  const user = await userRepo.getUserByEmail(email);
  return user;
};

const getUserById = async (id) => {
  const user = await userRepo.getUserById(id);
  return user;
};

const getOneUser = () => {
  return;
};

const updateOneUser = async (data) => {
  console.log('data:', data)
  const updatedUser = await userRepo.updateUser(data);
  return updatedUser;
};

const deleteOneUser = async (id) => {
  await userRepo.deleteOneUser(id)
  return;
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getUserByEmail,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};
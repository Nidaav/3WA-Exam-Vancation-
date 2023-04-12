const userRepo = require("../repository/userRepo");

const getAllUsers = async () => {
  const res = await userRepo.getAllUsers();
    return res
};

const createUser = async (newUser) => {
  const createdUser = await userRepo.createNewUser(newUser);
  return createdUser;
};

const getOneUser = () => {
    return;
};

const updateOneUser = () => {
  return;
};

const deleteOneUser = () => {
  return;
};

  module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    updateOneUser,
    deleteOneUser,
  };
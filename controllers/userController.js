const userService = require("../services/userService");
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.status(200).send(allUsers);
};

const createUser = async (req, res) => {
  const { body } = req;
  if (!body.firstName || !body.lastName || !body.email || !body.password) {
    return;
  }
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hash(body.password, salt)
  const newUser = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: hashedPassword,
    signUpDate: new Date(),
    role: body.role
  };
  
  const createdUser = await userService.createUser(newUser);
  newUser.userId = createdUser.insertId
  res.status(201).send({ status: "OK", data: createdUser, newUser: newUser });
};

const getOneUser = (req, res) => {
  const User = userService.getOneUser(orgId);
  res.send("Get an existing User");
};

const updateOneUser = (req, res) => {
  const { body } = req;
  const updatedUser = userService.updateOneUser(body);
  res.status(200).send({ status: "OK", data: updatedUser, newUser: body });
};

const deleteOneUser = (req, res) => {
  const id= req.params
  userService.deleteOneUser(id.userId);
  res.send("Delete an existing User");
};

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};

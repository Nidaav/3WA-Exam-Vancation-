const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers();
    console.log('allUsers:', allUsers)
    res.status(200).send(allUsers);
};

const createUser = async (req, res) => {
    const { body } = req;
    if (!body.name) {
        return;
    }

    const newUser = {
        name: body.name,
    };

    const createdUser = await userService.createUser(newUser);

    res.status(201).send({ status: "OK", data: createdUser});
};



const getOneUser = (req, res) => {
    const User = userService.getOneUser(orgId);
    res.send("Get an existing User");
};


const updateOneUser = (req, res) => {
    const updatedUser = userService.updateOneUser();
    res.send("Update an existing User");
};
  
const deleteOneUser = (req, res) => {
    userService.deleteOneUser();
    res.send("Delete an existing User");
};

module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    updateOneUser,
    deleteOneUser,
};
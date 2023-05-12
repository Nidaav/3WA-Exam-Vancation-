const db = require("../config/db");

const getAllUsers = async () => {
    return await db.sqlQuery(`SELECT user_id AS userId, first_name AS firstName, last_name AS lastName, email, password, sign_up_date AS signUpDate FROM users`);
    // const users = require("../fakeDB/users.json")
    // return (users)
};

const createNewUser = async (user) => {
    return await db.sqlQuery(`INSERT INTO users (name) VALUES (?) `, user.name);
}
module.exports = {
    getAllUsers,
    createNewUser,
}
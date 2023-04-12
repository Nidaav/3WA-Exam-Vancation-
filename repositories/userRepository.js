const db = require("../config/db");

const getAllUsers = async () => {
    return await db.sqlQuery(`SELECT * FROM users`);
};

const createNewUser = async (user) => {
    return await db.sqlQuery(`INSERT INTO users (name) VALUES (?) `, user.name);
}
module.exports = {
    getAllUsers,
    createNewUser,
}
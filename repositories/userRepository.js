const db = require("../config/db");

const getAllUsers = async () => {
    return await db.sqlQuery(`SELECT user_id AS userId, first_name AS firstName, last_name AS lastName, email, password, sign_up_date AS signUpDate, role, org_id AS orgId FROM users`);
    // ROLES : 1 = user, 2 = org, 3 = admin
};

const createNewUser = async (user) => {
    return await db.sqlQuery(`INSERT INTO users (first_name, last_name, email, password, sign_up_date, role, org_id) VALUES (?, ?, ?, ?, ?, ?, ?) `, [user.firstName, user.lastName, user.email, user.password, user.signUpDate, user.role, null]);
}

const getUserByEmail = async (email) => {
    // console.log('email:', email)
    return await db.sqlQuery(`SELECT user_id AS userId, first_name AS firstName, last_name AS lastName, email, password, sign_up_date AS signUpDate, role, org_id AS orgId FROM users WHERE email = ?`, [email]);
    // ROLES : 1 = user, 2 = org, 3 = admin
};

const getUserById = async (id) => {
    // console.log('id:', id)
    return await db.sqlQuery(`SELECT user_id AS userId, first_name AS firstName, last_name AS lastName, email, password, sign_up_date AS signUpDate, role, org_id AS orgId FROM users WHERE id = ?`, [id]);
    // ROLES : 1 = user, 2 = org, 3 = admin
};

const updateUser = async (user) => {
    return await db.sqlQuery(`UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE user_id = ?`, [user.firstName, user.lastName, user.email, user.userId]);
};
const deleteOneUser = async (id) => {
    return await db.sqlQuery(`DELETE FROM users WHERE user_id = ?`, [id]);
};
module.exports = {
    getAllUsers,
    createNewUser,
    getUserByEmail,
    getUserById,
    updateUser,
    deleteOneUser,
}
const db = require("../config/db");

const getAllVans = async () => {
    return await db.sqlQuery(`SELECT * FROM vans`);
};

const createNewVan = async (van) => {
    return await db.sqlQuery(`INSERT INTO vans (name) VALUES (?) `, van.name);
}
module.exports = {
    getAllVans,
    createNewVan,
}
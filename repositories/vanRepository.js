const db = require("../config/db");

const getAllVans = async () => {
    return await db.sqlQuery(`SELECT van_id AS vanId, user_id AS userId, model, capacity, description, price, address FROM vans`);
    // const vans = require("../fakeDB/vans.json")
    // return (vans)
};

const createNewVan = async (van) => {
    return await db.sqlQuery(`INSERT INTO vans (name) VALUES (?) `, van.name);
}
module.exports = {
    getAllVans,
    createNewVan,
}
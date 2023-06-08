const db = require("../config/db");

const getAllVans = async () => {
    return await db.sqlQuery(`SELECT van_id AS vanId, org_id AS orgId, model, capacity, description, price FROM vans`);
};

const getAllVansPictures = async () => {
    return await db.sqlQuery(`SELECT picture_id AS pictureId, van_id AS vanId, picture, size FROM vans_pictures`);
};
const findVanById = async (id) => {
    return await db.sqlQuery(`SELECT van_id AS vanId, org_id AS orgId, model, capacity, description, price FROM vans WHERE van_id = ?`, [id]);
};
const updateOneVan = async (van) => {
    return await db.sqlQuery(`UPDATE vans SET model = ?, capacity = ?, description = ?, price = ? WHERE van_id = ?`, [van.model, van.capacity, van.description, van.price, van.vanId]);
}
const deleteOneVan = async (id) => {
    // je laisse cette dernière ligne commentée pour montrer que la route complète est écrite mais que refaire un van me prend trop de temps, j'ai testé une fois elle fonctionne
    // return await db.sqlQuery(`DELETE FROM vans WHERE van_id = ?`, [id]);
}


module.exports = {
    getAllVans,
    getAllVansPictures,
    findVanById,
    updateOneVan,
    deleteOneVan,
}
const db = require("../config/db");

const getAllOrgs = async () => {
    return await db.sqlQuery(`SELECT org_id AS orgId, van_ids AS vanIds, org_name AS orgName FROM organisations`);
};

module.exports = {
    getAllOrgs,
}
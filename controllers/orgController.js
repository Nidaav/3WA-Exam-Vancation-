const orgService = require("../services/orgService");

const getAllOrgs = async (req, res) => {
    const allOrgs = await orgService.getAllOrgs();
    res.status(200).send(allOrgs);
};

const getOneOrg = (req, res) => {
    const Org = orgService.getOneOrg(orgId);
    res.send("Get an existing Van");
};

module.exports = {
    getAllOrgs,
    getOneOrg,
};
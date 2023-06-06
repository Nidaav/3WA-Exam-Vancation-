const orgService = require("../services/orgService");

const getAllOrgs = async (req, res) => {
    const allOrgs = await orgService.getAllOrgs();
    res.status(200).send(allOrgs);
};

const getOneOrg = (req, res) => {
    const Org = orgService.getOneOrg(orgId);
    res.send("Get an existing Van");
};

// const createVan = async (req, res) => {
//     const { body } = req;
//     if (!body.name) {
//         return;
//     }

//     const newVan = {
//         name: body.name,
//     };

//     const createdVan = await orgService.createVan(newVan);

//     res.status(201).send({ status: "OK", data: createdVan});
// };

// const updateOneVan = (req, res) => {
//     const updatedVan = orgService.updateOneVan();
//     res.send("Update an existing Van");
// };
  
// const deleteOneVan = (req, res) => {
//     orgService.deleteOneVan();
//     res.send("Delete an existing Van");
// };

module.exports = {
    getAllOrgs,
    getOneOrg,
    // createVan,
    // updateOneVan,
    // deleteOneVan,
};
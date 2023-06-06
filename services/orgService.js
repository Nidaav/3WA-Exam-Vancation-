const orgRepo = require("../repositories/orgRepository");

const getAllOrgs = async () => {
  const res = await orgRepo.getAllOrgs();
  for (const org of res) {
    org.vanIds = JSON.parse(org.vanIds)
  }
  return res
};

const getOneOrg = () => {
  return;
};

// const createVan = async (newVan) => {
//   const createdVan = await orgRepo.createNewVan(newVan);
//   return createdVan;
// };

// const updateOneVan = () => {
//   return;
// };

// const deleteOneVan = () => {
//   return;
// };

module.exports = {
  getAllOrgs,
  getOneOrg,
  // createVan,
  // updateOneVan,
  // deleteOneVan,
};
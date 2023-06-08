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

module.exports = {
  getAllOrgs,
  getOneOrg,
};
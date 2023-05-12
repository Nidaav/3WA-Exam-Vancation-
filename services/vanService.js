const vanRepo = require("../repositories/vanRepository");

const getAllVans = async () => {
  const res = await vanRepo.getAllVans();
  return res
};

const createVan = async (newVan) => {
  const createdVan = await vanRepo.createNewVan(newVan);
  return createdVan;
};

const getOneVan = () => {
  return;
};

const updateOneVan = () => {
  return;
};

const deleteOneVan = () => {
  return;
};

module.exports = {
  getAllVans,
  createVan,
  getOneVan,
  updateOneVan,
  deleteOneVan,
};
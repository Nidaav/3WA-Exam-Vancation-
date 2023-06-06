const vanRepo = require("../repositories/vanRepository");

const getAllVans = async () => {
  const res = await vanRepo.getAllVans();
  return res
};

const getAllVansPictures = async () => {
  const res = await vanRepo.getAllVansPictures();
  return res
};

const createVan = async (newVan) => {
  const createdVan = await vanRepo.createNewVan(newVan);
  return createdVan;
};

const getOneVan = () => {
  return;
};

const updateOneVan = async (body) => {
  const updateB = await vanRepo.updateOneVan(body);
  console.log('updateB:', updateB)
  const updatedB = await vanRepo.findVanById(body.vanId);
  return updatedB[0];
};

const deleteOneVan = (id) => {
  vanRepo.deleteOneVan(id);
};

module.exports = {
  getAllVans,
  getAllVansPictures,
  createVan,
  getOneVan,
  updateOneVan,
  deleteOneVan,
};
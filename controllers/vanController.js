const vanService = require("../services/vanService");

const getAllVans = async (req, res) => {
    const allVans = await vanService.getAllVans();
    res.status(200).send(allVans);
};

const getAllVansPictures = async (req, res) => {
    const allVansP = await vanService.getAllVansPictures();
    res.status(200).send(allVansP);
};

const updateOneVan = (req, res) => {
    const { body } = req;
    console.log('body:', body)
    const updatedVan = vanService.updateOneVan(body);
    res.status(200).send(updatedVan);

};
  
const deleteOneVan = (req, res) => {
    const id = req.params;
    vanService.deleteOneVan(id.vanId);
    res.send("Delete an existing Van");
};

module.exports = {
    getAllVans,
    getAllVansPictures,
    updateOneVan,
    deleteOneVan,
};
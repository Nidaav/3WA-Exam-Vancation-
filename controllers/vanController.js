const vanService = require("../services/vanService");

const getAllVans = async (req, res) => {
    const allVans = await vanService.getAllVans();
    console.log('allVans:', allVans)
    res.status(200).send(allVans);
};

const createVan = async (req, res) => {
    const { body } = req;
    if (!body.name) {
        return;
    }

    const newVan = {
        name: body.name,
    };

    const createdVan = await vanService.createVan(newVan);

    res.status(201).send({ status: "OK", data: createdVan});
};



const getOneVan = (req, res) => {
    const Van = vanService.getOneVan(orgId);
    res.send("Get an existing Van");
};


const updateOneVan = (req, res) => {
    const updatedVan = vanService.updateOneVan();
    res.send("Update an existing Van");
};
  
const deleteOneVan = (req, res) => {
    vanService.deleteOneVan();
    res.send("Delete an existing Van");
};

module.exports = {
    getAllVans,
    createVan,
    getOneVan,
    updateOneVan,
    deleteOneVan,
};
const vanService = require("../services/vanService");

const getAllVans = async (req, res) => {
    const allVans = await vanService.getAllVans();
    // console.log('allVans:', allVans)
    res.status(200).send(allVans);
};

const getAllVansPictures = async (req, res) => {
    const allVansP = await vanService.getAllVansPictures();
    res.status(200).send(allVansP);
};

// const createVan = async (req, res) => {
//     const { body } = req;
//     if (!body.name) {
//         return;
//     }

//     const newVan = {
//         name: body.name,
//     };

//     const createdVan = await vanService.createVan(newVan);

//     res.status(201).send({ status: "OK", data: createdVan});
// };



// const getOneVan = (req, res) => {
//     const Van = vanService.getOneVan(orgId);
//     res.send("Get an existing Van");
// };


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
    // createVan,
    // getOneVan,
    deleteOneVan,
};
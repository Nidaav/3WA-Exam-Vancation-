const express = require("express");
const router = express.Router();

const vanController = require("../controllers/vanController");

router.get("/", vanController.getAllVans);
router.get("/pictures", vanController.getAllVansPictures);

router.patch("/:vanId", vanController.updateOneVan);

router.delete("/:vanId", vanController.deleteOneVan);

module.exports = router;
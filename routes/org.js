const express = require("express");
const router = express.Router();

const orgController = require("../controllers/orgController");

router.get("/", orgController.getAllOrgs);

router.get("/:vanId", orgController.getOneOrg);

// router.post("/", orgController.createVan);

// router.patch("/:vanId", orgController.updateOneVan);

// router.delete("/:vanId", orgController.deleteOneVan);

module.exports = router;
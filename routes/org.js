const express = require("express");
const router = express.Router();

const orgController = require("../controllers/orgController");

router.get("/", orgController.getAllOrgs);

router.get("/:vanId", orgController.getOneOrg);

module.exports = router;
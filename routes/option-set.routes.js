const express = require("express");
const validateData = require("../services/validate-data");
const OptionSetController = require("../controllers/option-set.controller");
const OptionSets = require("../models/option-set.model");
const router = express.Router();
router.get("/", OptionSetController.getAll);
router.post("/", validateData(OptionSets), OptionSetController.create);
router.get("/:id", OptionSetController.getOne);
router.put("/:id", validateData(OptionSets), OptionSetController.update);
router.delete("/:id", OptionSetController.delete);

module.exports = router;

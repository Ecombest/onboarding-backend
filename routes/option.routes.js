const express = require("express");
const validateData = require("../services/validate-data");
const OptionController = require("../controllers/option.controller");
const Option = require("../models/option.model");
const router = express.Router();
router.post("/", OptionController.create);
router.get("/set/:setId", OptionController.listOptionsBySetId);
router.put("/:id", OptionController.update);
router.delete("/:id", OptionController.delete);

module.exports = router;

const FunctionController = require("../controllers/function.controller");
const express = require("express");
const { route } = require("./template.routes");
const Function = require("../models/function.model");

const router = express.Router();
router.get("/", FunctionController.getAll);
router.post("/option-ids", FunctionController.getAllByOptionIds);
module.exports = router;

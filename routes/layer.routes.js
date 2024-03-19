const LayerController = require("../controllers/layer.controller");
const express = require("express");
const validateData = require("../services/validate-data");
const Layer = require("../models/layer.model");

const router = express.Router();
router.get("/", LayerController.getAll);
router.post("/", validateData(Layer), LayerController.create);

module.exports = router;

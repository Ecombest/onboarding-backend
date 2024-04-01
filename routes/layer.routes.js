const LayerController = require("../controllers/layer.controller");
const express = require("express");
const validateData = require("../services/validate-data");
const Layer = require("../models/layer.model");
const { route } = require("./template.routes");

const router = express.Router();
router.get("/", LayerController.getAll);
router.post("/", validateData(Layer), LayerController.create);
router.post("/list", LayerController.createList);
router.get("/template/:templateId", LayerController.getListLayerByTemplateId);
module.exports = router;

const TemplateController = require("../controllers/template.controller");
const express = require("express");
const validateData = require("../services/validate-data");
const Template = require("../models/template.model");

const router = express.Router();
router.get("/", TemplateController.getAll);
router.post("/", validateData(Template), TemplateController.create);
router.get("/:id", TemplateController.getOne);
router.put("/:id", validateData(Template), TemplateController.update);
router.delete("/:id", TemplateController.delete);

module.exports = router;

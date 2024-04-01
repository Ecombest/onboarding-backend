const express = require("express");
const validateData = require("../services/validate-data");
const CampaignController = require("../controllers/campaign.controller");
const Campaign = require("../models/campaign.model");
const router = express.Router();
router.get("/", CampaignController.getAllCampaigns);
router.post("/", validateData(Campaign), CampaignController.createCampaign);
router.get("/:id", CampaignController.getCampaign);
router.put("/:id", validateData(Campaign), CampaignController.updateCampaign);
router.delete("/:id", CampaignController.deleteCampaign);

module.exports = router;

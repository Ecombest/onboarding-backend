// controllers/FunctionController.js
const sequelize = require("../config/sequelize");

class CampaignController {
  async getAllCampaigns(req, res) {
    try {
      const campaigns = await sequelize.models.Campaign.findAll();
      res.json(campaigns);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async createCampaign(req, res) {
    try {
      const campaign = await sequelize.models.Campaign.create(req.body);
      res.status(201).json(campaign);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getCampaign(req, res) {
    try {
      const { id } = req.params;
      const campaign = await sequelize.models.Campaign.findOne({ where: { id } });
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateCampaign(req, res) {
    try {
      const { id } = req.params;
      await sequelize.models.Campaign.update(req.body, { where: { id } });
      const campaign = await sequelize.models.Campaign.findOne({ where: { id } });
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async deleteCampaign(req, res) {
    try {
      const { id } = req.params;
      await sequelize.models.Campaign.destroy({ where: { id } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CampaignController();

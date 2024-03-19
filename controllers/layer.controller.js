// controllers/layerController.js
const sequelize = require("../config/sequelize");

class LayerController {
  constructor() {
    this.layerModel = sequelize.models.Layer;
  }
  async create(req, res, next) {
    const layer = await sequelize.models.Layer.create(req.body).catch(next);
    if (!layer) return;
    res.status(201).json(layer);
  }
  async getAll(req, res, next) {
    const layers = await sequelize.models.Layer.findAll();
    res.status(200).json(layers);
  }
}

module.exports = new LayerController();

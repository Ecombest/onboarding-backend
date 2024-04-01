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
  async createList(req, res, next) {
    const layerToCreate = req.body;
    const layers = [];
    for (let i = 0; i < layerToCreate.length; i++) {
      if (!layerToCreate[i].id) {
        const layer = await sequelize.models.Layer.create(layerToCreate[i]).catch(next);
        if (!layer) return;
        layers.push(layer);
        continue;
      }
      const currentLayer = await sequelize.models.Layer.findByPk(layerToCreate[i].id);
      if (currentLayer) {
        await currentLayer.update(layerToCreate[i]).catch(next);
        layers.push(currentLayer);
        continue;
      } else {
        const layer = await sequelize.models.Layer.create(layerToCreate[i]).catch(next);
        if (!layer) return;
        layers.push(layer);
      }
    }

    // const layers = await sequelize.models.Layer.bulkCreate(req.body).catch(next);
    // if (!layers) return;
    res.status(201).json(layers);
  }
  async getAll(req, res, next) {
    const layers = await sequelize.models.Layer.findAll();
    res.status(200).json(layers);
  }
  async getListLayerByTemplateId(req, res, next) {
    const layers = await sequelize.models.Layer.findAll({ where: { templateId: req.params.templateId } });
    res.status(200).json(layers);
  }
}

module.exports = new LayerController();

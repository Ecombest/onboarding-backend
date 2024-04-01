const sequelize = require("../config/sequelize");

class OptionSetController {
  constructor() {}
  async create(req, res, next) {
    const optionSet = await sequelize.models.OptionSets.create(req.body).catch(next);
    if (!optionSet) return;
    res.status(201).json(optionSet);
  }
  async getAll(req, res, next) {
    const optionSets = await sequelize.models.OptionSets.findAll();
    res.status(200).json(optionSets);
  }
  async getOne(req, res, next) {
    const optionSet = await sequelize.models.OptionSets.findByPk(req.params.id);
    res.status(200).json(optionSet);
  }
  async update(req, res, next) {
    const optionSet = await sequelize.models.OptionSets.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).catch(next);
    if (!optionSet) return;
    res.status(200).json(optionSet);
  }
  async delete(req, res, next) {
    const rowsCount = await sequelize.models.OptionSets.destroy({ where: { id: req.params.id } }).catch(next);
    if (!rowsCount) return;
    res.status(204).end();
  }
  async getAllLayersTemplates(req, res, next) {
    const optionSets = await sequelize.models.OptionSets.findAll({
      where: { type: "layer" },
    });
    res.status(200).json(optionSets);
  }
}

module.exports = new OptionSetController();

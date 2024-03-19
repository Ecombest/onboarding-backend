// controllers/templateController.js
const sequelize = require("../config/sequelize");

class TemplateController {
  constructor() {
    this.templateModel = sequelize.models.Template;
  }
  async create(req, res, next) {
    const template = await sequelize.models.Template.create(req.body).catch(next);
    if (!template) return;
    res.status(201).json(template);
  }
  async getAll(req, res, next) {
    const templates = await sequelize.models.Template.findAll();
    res.status(200).json(templates);
  }
  async getOne(req, res, next) {
    const template = await sequelize.models.Template.findByPk(req.params.id);
    res.status(200).json(template);
  }
  async update(req, res, next) {
    const [rowsCount, [template]] = await sequelize.models.Template.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).catch(next);
    if (!rowsCount) return;
    res.status(200).json(template);
  }
  async delete(req, res, next) {
    const rowsCount = await sequelize.models.Template.destroy({ where: { id: req.params.id } }).catch(next);
    if (!rowsCount) return;
    res.status(204).end();
  }
}

module.exports = new TemplateController();

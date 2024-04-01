// controllers/FunctionController.js
const sequelize = require("../config/sequelize");

class FunctionController {
  async getAll(req, res, next) {
    const functions = await sequelize.models.Function.findAll().catch(next);
    if (!functions) return;
    res.status(200).json(functions);
  }

  async getAllByOptionIds(req, res, next) {
    const { optionIds } = req.body;
    const functions = await sequelize.models.Function.findAll({
      where: { optionId: optionIds },
      inCludes: sequelize.models.Option,
    }).catch(next);
    if (!functions) return;
    res.status(200).json(functions);
  }
}

module.exports = new FunctionController();

const sequelize = require("../config/sequelize");

class OptionController {
  async create(req, res, next) {
    const optionData = { ...req.body };
    delete optionData.listFunction;
    const listFunctionBody = JSON.parse(JSON.stringify(req.body.listFunction || []));
    const transaction = await sequelize.transaction();

    try {
      const option = await sequelize.models.Option.create(optionData).catch(next);
      if (!option) return;
      const listFunction = listFunctionBody?.map((func) => {
        const newFunc = {
          ...func,
          optionId: option.id,
        };
        delete newFunc.id;
        return newFunc;
      });
      if (listFunction) {
        const response = await sequelize.models.Function.bulkCreate(listFunction).catch(next);
        if (!response) return;
      }
      await transaction.commit();

      res.status(201).json({ message: "Create successfully" });
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      res.status(400).json({ message: "Opps" });
    }
  }
  async listOptionsBySetId(req, res, next) {
    const setId = req.params.setId;
    const options = await sequelize.models.Option.findAll({
      where: { setId },
    }).catch(next);
    if (!options) return;
    const listOptionIds = options.map((option) => option.id);
    const optionsWithFunctions = [];
    for (const optionId of listOptionIds) {
      const listFunction = await sequelize.models.Function.findAll({
        where: { optionId },
      }).catch(next);
      optionsWithFunctions.push({
        ...options.find((option) => option.id === optionId).dataValues,
        listFunction,
      });
    }
    res.status(200).json(optionsWithFunctions);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const optionData = { ...req.body };
    delete optionData.listFunction;
    const listFunctionBody = JSON.parse(JSON.stringify(req.body.listFunction || []));
    const option = await sequelize.models.Option.findByPk(id);
    if (!option) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    const transaction = await sequelize.transaction();

    try {
      await option.update(optionData).catch(next);
      const listFunction = listFunctionBody?.map((func) => {
        const newFunc = {
          ...func,
          optionId: option.id,
        };
        delete newFunc.id;
        return newFunc;
      });
      if (listFunction) {
        await sequelize.models.Function.destroy({
          where: { optionId: option.id },
        }).catch(next);
        const response = await sequelize.models.Function.bulkCreate(listFunction).catch(next);
        if (!response) return;
      }
      await transaction.commit();

      res.status(200).json({ message: "Update successfully" });
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      res.status(400).json({ message: "Oops" });
    }
  }

  async delete(req, res, next) {
    const id = req.params.id;

    const option = await sequelize.models.Option.findByPk(id);
    if (!option) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    const transaction = await sequelize.transaction();
    try {
      await sequelize.models.Function.destroy({
        where: { optionId: option.id },
      }).catch(next);
      await option.destroy().catch(next);
      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      res.status(400).json({ message: "Oops" });
    }
    res.status(200).json({ message: "Delete successfully" });
  }
}

module.exports = new OptionController();

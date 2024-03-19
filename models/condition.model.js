const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class Condition extends Model {}

Condition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    operator: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    optionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valueID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Condition" }
);

module.exports = Condition;

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class Function extends Model {}

Function.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personalizeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    templateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Function" }
);

module.exports = Function;

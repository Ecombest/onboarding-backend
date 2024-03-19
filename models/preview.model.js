const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");
class Preview extends Model {}
Preview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    backgroundImageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backgroundColor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    templateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Preview" }
);
module.exports = Preview;

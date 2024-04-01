const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");
class Option extends Model {}

Option.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    setID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    helpText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Option" }
);
Option.associations = (models) => {
  Option.hasMany(models.Condition, {
    foreignKey: "id",
  });
  Option.hasMany(models.Function, {
    foreignKey: "optionId",
  });
};

module.exports = Option;

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

    templateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    layerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    optionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Function" }
);
Function.associations = (models) => {
  Function.hasOne(models.Layer, {
    foreignKey: "layerId",
  });
  Function.hasOne(models.Option, {
    foreignKey: "optionId",
  });
};

module.exports = Function;

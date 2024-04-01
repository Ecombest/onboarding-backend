const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");
class Layer extends Model {}

Layer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Image placeholder",
    },
    advances: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    top: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    left: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    angle: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maskURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    templateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Layer" }
);

Layer.associations = (models) => {
  Layer.hasOne(models.ImageSetting, {
    foreignKey: "layerId",
  });
  Layer.hasMany(models.Function, {
    foreignKey: "layerId",
  });
};

module.exports = Layer;

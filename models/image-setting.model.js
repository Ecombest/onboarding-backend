const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class ImageSetting extends Model {}

ImageSetting.init(
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
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    removeBackground: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    faceCutout: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    advancedFilter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    objectFit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    layerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "ImageSetting" }
);

module.exports = ImageSetting;

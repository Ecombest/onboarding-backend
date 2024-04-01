const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class Campaign extends Model {}

Campaign.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    productLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    selectorHtml: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    templateId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    optionSetId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Campaign" }
);

Campaign.associations = (models) => {
  Campaign.hasOne(models.Template, {
    foreignKey: "templateId",
  });
  Campaign.hasOne(models.OptionSets, {
    foreignKey: "optionSetId",
  });
};

module.exports = Campaign;

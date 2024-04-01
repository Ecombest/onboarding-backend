const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");
class Template extends Model {}

Template.init(
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
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Template" }
);
Template.associations = (models) => {
  Template.hasOne(models.Preview, {
    foreignKey: "templateId",
  });
  Template.hasMany(models.Layer, {
    foreignKey: "templateId",
  });
  Template.hasMany(models.Function, {
    foreignKey: "templateId",
  });
};

module.exports = Template;

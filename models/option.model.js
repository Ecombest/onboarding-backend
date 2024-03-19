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
    revisionID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    setID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    optionSetID: {
      type: DataTypes.INTEGER,
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
    sortID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hideVisually: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isTextarea: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    maxLines: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maxCharsPerLines: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    helpText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxLength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeholder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conditionsAction: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    values: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    defaultValue: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    defaultImage: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    imageMinWidth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imageMinHeight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buttonLabel: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    clipartCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Option" }
);
Option.associations = (models) => {
  Option.belongsTo(models.OptionSets, {
    foreignKey: "optionSetID",
  });
  Option.hasMany(models.Condition, {
    foreignKey: "id",
  });
  Option.hasMany(models.Function, {
    foreignKey: "id",
  });
};

module.exports = Option;

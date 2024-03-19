const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

class OptionSets extends Model {}

OptionSets.init(
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
    totalOptionSetItems: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, modelName: "OptionSets" }
);

OptionSets.associate = (models) => {
  OptionSets.hasMany(models.OptionSetItems, {
    foreignKey: "optionSetID",
    as: "optionSetItems",
  });
};

module.exports = OptionSets;

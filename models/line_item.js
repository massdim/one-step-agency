"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Line_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Line_Item.belongsTo(models.Talent);
      // Line_Item.belongsTo(models.Talents_Cart);
    }
  }
  Line_Item.init(
    {
      TalentId: DataTypes.INTEGER,
      TalentsCart: DataTypes.INTEGER,
      OrderName: DataTypes.STRING,
      days: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Line_Item",
    }
  );
  return Line_Item;
};

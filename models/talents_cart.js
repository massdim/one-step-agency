"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Talents_Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Talents_Cart.belongsTo(models.User);
      // Talents_Cart.belongsToMany(models.Talent, {
      //   through: "models.Line_Item",
      // });
    }
  }
  Talents_Cart.init(
    {
      UserId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Talents_Cart",
    }
  );
  return Talents_Cart;
};

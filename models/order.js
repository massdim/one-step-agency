"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      UserId: DataTypes.INTEGER,
      name: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      tax: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      totalDue: DataTypes.INTEGER,
      totalDays: DataTypes.INTEGER,
      description: DataTypes.STRING,
      payTrxNumber: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};

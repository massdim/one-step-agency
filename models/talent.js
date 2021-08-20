"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Talent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Talent.belongsTo(models.User);
      Talent.hasMany(models.Talents_Image);
      // Talent.hasMany(models.Talents_Comment);

      // Talent.belongsToMany(models.Talents_Cart, {
      //   through: "models.Line_Item",
      // });

      // Talent.belongsToMany(models.User, { through: "models.Talents_Comment" });
    }
  }
  Talent.init(
    {
      fullName: DataTypes.STRING,
      nationality: DataTypes.STRING,
      age: DataTypes.INTEGER,
      birth: DataTypes.DATE,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      accountSocial: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Talent",
    }
  );
  return Talent;
};

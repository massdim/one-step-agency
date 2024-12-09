"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Talents_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Talents_Image.belongsTo(models.Talent);
    }
  }
  Talents_Image.init(
    {
      TalentId: DataTypes.INTEGER,
      fileName: DataTypes.STRING,
      fileSize: DataTypes.INTEGER,
      fileType: DataTypes.STRING,
      primary: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Talents_Image",
    }
  );
  return Talents_Image;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Talents_Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Talents_Comment.belongsTo(models.User);
      // Talents_Comment.belongsTo(models.Talent);
      // Talents_Comment.belongsTo(models.User);
      // Talents_Comment.belongsTo(models.Talent);
    }
  }
  Talents_Comment.init(
    {
      TalentId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      comments: DataTypes.STRING,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Talents_Comment",
    }
  );
  return Talents_Comment;
};

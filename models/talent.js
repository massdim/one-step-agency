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
      UserId: DataTypes.INTEGER,
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Nationality cannot be null!",
          },
          notEmpty: {
            msg: "Fullname cannot be empty!",
          },
        },
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Nationality cannot be null!",
          },
          notEmpty: {
            msg: "Nationality cannot be empty!",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Age cannot be null!",
          },
          notEmpty: {
            msg: "Age cannot be empty!",
          },
          isInt: {
            msg: "Age must be integer!",
          },
        },
      },
      birth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Birth cannot be null!",
          },
          notEmpty: {
            msg: "Birth cannot be empty!",
          },
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Height cannot be null!",
          },
          notEmpty: {
            msg: "Height cannot be empty!",
          },
          isInt: {
            msg: "Height must be integer!",
          },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Weight cannot be null!",
          },
          notEmpty: {
            msg: "Weight cannot be empty!",
          },
          isInt: {
            msg: "Weight must be integer!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price cannot be null!",
          },
          notEmpty: {
            msg: "Price cannot be empty!",
          },
          isInt: {
            msg: "Price must be integer!",
          },
        },
      },
      accountSocial: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Talent",
    }
  );
  return Talent;
};

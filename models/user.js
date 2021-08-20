"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { encrypter } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Talent);
      // User.hasMany(models.Talents_Comment);
      // User.hasMany(models.Talents_Cart);

      // User.belongsToMany(models.Talent, { through: "models.Talents_Comment" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name cannot be null!",
          },
          notEmpty: {
            msg: "Name cannot be empty!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email cannot be null!",
          },
          notEmpty: {
            msg: "Email cannot be empty!",
          },
          isEmail: {
            msg: "Only email format is allowed!",
          },
          isUnique: (val, next) => {
            User.findOne({ where: { email: val } }).then((user) => {
              if (!user) {
                next();
              } else {
                return next("Email address already in use!");
              }
            });
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password cannot be null!",
          },
          notEmpty: {
            msg: "Password cannot be empty!",
          },
        },
      },
      salt: DataTypes.STRING,
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notNull: {
            msg: "Birthdate cannot be null!",
          },
          notEmpty: {
            msg: "Birthdate cannot be empty!",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Gender cannot be null!",
          },
          notEmpty: {
            msg: "Gender cannot be empty!",
          },
        },
      },
      avatar: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          const salt = bcrypt.genSaltSync(10);
          user.salt = salt;
          user.password = encrypter(user.password, salt);
          user.type = user.type ? user.type : "user";
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

const { User } = require("../../models");
const { decrypter } = require("../../helpers/bcrypt");
const { tokenGenerator } = require("../../helpers/jwt");

class ApiController {
  static async register(req, res) {
    const { name, email, password, gender, birthdate, type } = req.body;

    try {
      await User.create({
        name,
        email,
        password,
        gender,
        birthdate,
        type,
      });

      res.status(201).json({
        status: 201,
        message: "New user has been created!",
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        ...err,
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        const hashPassword = user.password;
        const isMatch = decrypter(password, hashPassword);

        if (isMatch) {
          const access_token = tokenGenerator(user.dataValues);
          res.status(200).json({
            status: 200,
            message: "You are successfully logged in",
            data: {
              user,
              access_token,
            },
          });
        } else {
          throw {
            status: 403,
            message: "Password is invalid!",
          };
        }
      } else {
        throw {
          status: 404,
          message: "User not found!",
        };
      }
    } catch (err) {
      if (err.errors) {
        res.status(500).json({
          status: 500,
          ...err,
        });
      } else {
        res.status(err.status).json(err);
      }
    }
  }

  static async updateProfile(req, res) {
    const userData = req.userData;
    // const file = req.file;
    const { name, password, birthdate, gender } = req.body;

    try {
      const user = await User.findOne({ where: { email: userData.email } });

      await User.update(
        {
          name,
          password,
          birthdate,
          gender,
          // avatar: file ? file.filename : user.avatar,
        },
        { where: { email: user.email } }
      );

      const newUserData = await User.findOne({
        where: { email: userData.email },
      });

      res.status(200).json({
        status: 200,
        message: "User data has been updated!",
        user: newUserData,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ApiController;

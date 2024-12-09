const { User } = require("../models");

const deleteUser = async () => {
  try {
    await User.destroy({ where: {} });
    console.log("Deleted all users successfully!");
  } catch (err) {
    console.log(err);
  }
};

deleteUser();

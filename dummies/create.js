const { User } = require("../models");
const fs = require("fs");

const createUser = () => {
  const data = fs.readFileSync("./dummies/JSON/user.json");
  const users = JSON.parse(data);

  users.forEach(async (user) => {
    const { id, name, email, password, gender, birthdate, avatar, type } = user;

    try {
      await User.create({
        id,
        name,
        email,
        password,
        gender,
        birthdate,
        avatar,
        type,
      });
      console.log("dummy data for user has been created successfully!");
    } catch (err) {
      console.log(err);
    }
  });
};

createUser();

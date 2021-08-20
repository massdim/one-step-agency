require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET;

const tokenGenerator = (user) => {
  // const { id, name, email, password, type } = user;
  const token = jwt.sign(user, secretCode);
  return token;
};

const tokenVerifier = (token) => {
  const decoded = jwt.verify(token, secretCode);
  return decoded;
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};

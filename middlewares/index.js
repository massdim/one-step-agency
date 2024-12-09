const { adminAuth } = require("./admin");
const { userAuth } = require("./user");
const { uploadMultiple } = require("./multer");

module.exports = { adminAuth, userAuth, uploadMultiple };

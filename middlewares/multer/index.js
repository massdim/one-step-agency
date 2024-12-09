const multer = require("multer");

const uploadMultiple = multer({
  storage: multer.diskStorage({
    destination: "./public/images/talents/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
}).array("images");

module.exports = { uploadMultiple };

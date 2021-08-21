const route = require("express").Router();

const { AdminController } = require("../../controllers");
const { adminAuth } = require("../../middlewares");

route.post("/talents/add", adminAuth, AdminController.addTalent);

module.exports = route;

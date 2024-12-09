const route = require("express").Router();

const { ApiController } = require("../../controllers");
const { userAuth } = require("../../middlewares");

route.post("/register", ApiController.register);
route.post("/login", ApiController.login);

route.put("/account/update", userAuth, ApiController.updateProfile);

route.get("/talents/:search?/:sort?/:page?", ApiController.showAllTalents);

module.exports = route;

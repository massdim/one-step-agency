const route = require("express").Router();

const { AdminController } = require("../../controllers");
const { adminAuth, uploadMultiple } = require("../../middlewares");

route.post(
  "/talents/add",
  adminAuth,
  uploadMultiple,
  AdminController.addTalent
);
route.put("/talents/:id/update", adminAuth, AdminController.updateTalent);
route.get("/talents/details/:id", AdminController.showOneTalent);
route.get("/talents/:page?/:search?", AdminController.showAllTalents);

module.exports = route;

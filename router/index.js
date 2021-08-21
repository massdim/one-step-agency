const router = require("express").Router();

const AdminRouter = require("./admin");
const ApiRouter = require("./api");

router.use("/admin", AdminRouter);
router.use("/api", ApiRouter);

module.exports = router;

const router = require("express").Router();

const ApiRouter = require("./api");

router.use("/api", ApiRouter);

module.exports = router;

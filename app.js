require("dotenv").config();

const router = require("./router");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

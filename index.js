const express = require("express");
const router = require("./api");
const errorMdw = require("./middleware/error");
const { connectDb } = require("./models");

const app = express();

app.use(express.json());
app.use("/upload", express.static("upload"));

app.use(router);

app.listen(5002, () => {
  console.log("running 5002");
  connectDb();
});

const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get("/characters", (res, req) => {
  res.json(fs.readFileSync("./data.json"));
});
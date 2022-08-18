const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");

const fs = require("fs");

app.get("/characters", (res, req) => {
  res.json(fs.readFileSync("./data.json"));
});

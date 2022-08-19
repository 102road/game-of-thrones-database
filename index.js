const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get("/characters", (req, res) => {
  const result = JSON.parse(fs.readFileSync("./data.json"));
  res.send(result);
});

app.post("/characters", (req, res) => {
  const character = req.headers.id;
  const data = JSON.parse(fs.readFileSync("./results.json"));
  data.character = data.character + 1;
  fs.writeFileSync("./results.json", data);
});

app.listen(4000, () => {
  console.log("App is listening");
});

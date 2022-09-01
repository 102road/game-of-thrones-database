const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//GET functions 

app.get("/", (req, res) => {
  const result = JSON.parse(fs.readFileSync("./data.json"));
  res.send(result);
});

app.get("/results", (req, res) => {
  const result = JSON.parse(fs.readFileSync("./results.json"));
  res.json(result);
});

// POST functions

app.post("/", (req, res) => {
  
  const character = req.headers.fullname;

  const data = JSON.parse(fs.readFileSync("./results.json"));

  data[character] = data[character] + 1;

  fs.writeFileSync("./results.json", JSON.stringify(data), "utf-8", (err) => {
    console.log(err);
  });
  
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening");
});

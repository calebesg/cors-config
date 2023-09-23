const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

app.use(cors());
app.use(allowCrossDomain);
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

app.listen(process.env.PORT || 3333, console.log("APP RUNING"));

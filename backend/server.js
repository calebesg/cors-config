const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.DOMAIN_ALLOW_ACCESS }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

app.listen(3333, console.log("APP RUNING"));

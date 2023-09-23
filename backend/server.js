const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

app.listen(process.env.PORT || 3333, console.log("APP RUNING"));

const express = require("express");
const cors = require("cors");

const app = express();

// const allowCrossDomain = (req, res, next) => {
//   res.header(`Access-Control-Allow-Origin`, [
//     "https://cors-config-j1yd.vercel.app",
//     "*",
//   ]);
//   res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//   res.header(`Access-Control-Allow-Headers`, `Content-Type`);
//   next();
// };

// app.use(allowCrossDomain);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

const port = process.env.PORT || 3333;

app.listen(port);

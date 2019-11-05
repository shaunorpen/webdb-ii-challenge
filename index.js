const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

require("dotenv").config();

const server = express();

server.use(cors());
server.use(helmet());

server.get("*", (_req, res) => {
  res
    .status(200)
    .json({ message: "The API is running on port " + process.env.PORT });
});

server.listen(process.env.PORT, () => {
  console.log("Listening on: " + process.env.PORT);
});

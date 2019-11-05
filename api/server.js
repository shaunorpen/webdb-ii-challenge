const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const carsRouter = require("../cars/carsRouter");

require("dotenv").config();

const server = express();

server.use(cors());
server.use(helmet());
server.use("/api/cars", carsRouter);

server.get("*", (_req, res) => {
  res
    .status(200)
    .json({ message: "The API is running on port " + process.env.PORT });
});

module.exports = server;

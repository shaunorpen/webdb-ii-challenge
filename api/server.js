require("dotenv").config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const carsRouter = require("../cars/carsRouter");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("*", (_req, res) => {
  res
    .status(200)
    .json({ message: "The API is running on port " + process.env.PORT });
});

module.exports = server;

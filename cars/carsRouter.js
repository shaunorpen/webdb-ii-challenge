const express = require("express");
const dealer = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  dealer("cars")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post("/", (req, res) => {
  dealer("cars")
    .insert(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:id", (req, res) => {
  // implement
});

router.delete("/:id", (req, res) => {
  // implement
});

module.exports = router;

const express = require("express");
const router = express.Router();
const dealer = require("./helpers");

router.get("/:id", (req, res) => {
  dealer
    .getCar(req.params.id)
    .then(data => {
      res.status(200).json(data[0]);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/", (req, res) => {
  dealer
    .getAllCars()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post("/", (req, res) => {
  dealer
    .addCar(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:id", (req, res) => {
  dealer
    .updateCar(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete("/:id", (req, res) => {
  dealer
    .deleteCar(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;

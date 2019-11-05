const express = require("express");
const router = express.Router();
const dealer = require("./helpers");

router.get("/:id", validateVehicleId, (req, res) => {
  res.status(200).json(req.car);
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

router.post("/", validateNewVehicle, (req, res) => {
  dealer
    .addCar(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:id", validateVehicleId, validateUpdatedVehicle, (req, res) => {
  dealer
    .updateCar(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete("/:id", validateVehicleId, (req, res) => {
  dealer
    .deleteCar(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

function validateVehicleId(req, res, next) {
  dealer
    .getCar(req.params.id)
    .then(data => {
      if (data.length) {
        req.car = data[0];
        next();
      } else {
        res.status(404).json("There is no vehicle with that ID");
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
}

function validateNewVehicle(req, res, next) {
  if (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
    res.status(400).json("Please provide a VIN, make, model and mileage");
  } else {
    next();
  }
}

function validateUpdatedVehicle(req, res, next) {
  if (!req.body.vin && !req.body.make && !req.body.model && !req.body.mileage) {
    res
      .status(400)
      .json("Please provide an updated VIN, make, model and/or mileage");
  } else {
    req.body = { ...req.body, id: req.params.id };
    next();
  }
}

module.exports = router;

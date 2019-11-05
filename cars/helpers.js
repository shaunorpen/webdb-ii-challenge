const dealer = require("../data/db-config");

function getCar(id) {
  return dealer("cars").where({ id: id });
}

function getAllCars() {
  return dealer("cars");
}

function addCar(car) {
  return dealer("cars").insert(car);
}

function updateCar(car) {
  return dealer("cars")
    .where({ id: car.id })
    .update(car);
}

function deleteCar(id) {
  return dealer("cars")
    .where({ id: id })
    .del();
}

module.exports = {
  getCar,
  getAllCars,
  addCar,
  updateCar,
  deleteCar
};

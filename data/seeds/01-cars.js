exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "Ford",
          model: "Sierra Tourer",
          mileage: 6000,
          vin: "2134AAN"
        },
        {
          make: "Vauxhall",
          model: "Skyline",
          mileage: 8000,
          vin: "98165asdf"
        },
        {
          make: "Mazda",
          model: "8",
          mileage: 3000,
          vin: "89asdfs"
        }
      ]);
    });
};

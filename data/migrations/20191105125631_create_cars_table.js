exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .string("vin")
      .unique()
      .notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();
    table.string("transmission");
    table.string("statusOfTitle");
    table.unique(["make", "model"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

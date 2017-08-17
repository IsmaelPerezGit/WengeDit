exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('username');
    table.string('password');
    table.string('email');
    table.string('age');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

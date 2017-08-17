exports.up = function(knex, Promise) {
  return knex.schema.createTable('userinfo', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('username');
    table.string('password');
    table.string('email');
    table.string('age');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userinfo');
};

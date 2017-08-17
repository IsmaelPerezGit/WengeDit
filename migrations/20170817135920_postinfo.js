exports.up = function(knex, Promise) {
  return knex.schema.createTable('postinfo', function(table){
    table.increments();
    table.string('content');
    table.string('user_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postinfo');
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('commentinfo', function(table){
    table.increments();
    table.string('content');
    table.string('user_id');
    table.string('post_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postinfo');
};

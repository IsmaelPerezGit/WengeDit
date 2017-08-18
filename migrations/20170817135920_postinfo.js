exports.up = function(knex, Promise) {
  return knex.schema.createTable('postinfo', function(table){
    table.increments();
    table.string('post_content');
    table.integer('user_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postinfo');
};

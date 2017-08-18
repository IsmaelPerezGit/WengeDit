exports.up = function(knex, Promise) {
  return knex.schema.createTable('commentinfo', function(table){
    table.increments();
    table.string('comment_content');
    table.string('user_id');
    table.integer('post_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('commentinfo');
};

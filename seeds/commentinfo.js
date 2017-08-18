
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('commentinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('commentinfo').insert([
        {comment_content:'Make a personal website', user_id:1, post_id:1},
        {comment_content:'The elephant is a nice elephant ', user_id:2, post_id:3},
        {comment_content:'Destiny 2', user_id:3, post_id:2}
      ]);
    });
};

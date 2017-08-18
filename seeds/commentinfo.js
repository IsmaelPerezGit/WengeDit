
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('commentinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('commentinfo').insert([
        {content:'Make a personal website', user_id:1, post_id:1},
        {content:'The elephant is a nice elephant ', user_id:2, post_id:3},
        {content:'Destiny 2', user_id:3, post_id:2}
      ]);
    });
};

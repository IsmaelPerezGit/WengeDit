
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('postinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('postinfo').insert([
        {post_content:'What should I do to get a job as a jr dev?', user_id:1},
        {post_content:'Any new games to look out for on pc?', user_id:2},
        {post_content:'An Elephant Got Caught on Security Camera Picking Up Trash and Putting it in a Garbage Can', user_id:3}
      ]);
    });
};

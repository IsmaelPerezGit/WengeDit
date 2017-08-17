
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'test', password: 'test', email:'fake@fake.net', age :21},
        { username: 'bob', password: 'bob', email:'bob@fake.net', age :21},
        { username: 'susy', password: 'susy', email:'susy@fake.net', age :21},
        { username: 'ROBOTRON9001', password: 'Itsover9000', email:'robot@fake.net', age :21},
        { username: 'admin', password: 'admin', email:'admin@fake.net', age :21}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('userinfo').insert([
        { first_name:'bob', last_name:'bobson',username: 'bob1234', password: 'bob', email:'bob@yahoo.net', age :21},
        { first_name:'bill', last_name:'billson',username: 'bill4321', password: 'bill', email:'bill@netscape.net', age :33},
        { first_name:'jesus', last_name:'christenson',username: 'jesus32', password: 'jesus', email:'jesus@sky.net', age :32},
      ]);
    });
};

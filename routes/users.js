var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');


// //get user page
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

//login form
router.post('/login', function(req, res, next) {
  console.log(req.body)
  knex.raw(`SELECT * FROM userinfo WHERE username = '${req.body.username}'`)
    .then(function(users) {
      bcrypt.compare(req.body.password, users.rows[0].password, function(err, resp) {
        if (resp) {
          res.send('Password Successful!!')
        } else {
          res.send('Incorrect Login')
        }
      });
      console.log(user.rows[0].password);
    });
});

//Get registration form
router.get('/new_user', function(req, res, next) {
  res.render('new_user')
});

//post registration information
router.post('/new_user', function(req, res, next) {
  if (req.body.password === req.body.confirm) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex.raw(`insert into userinfo (first_name,last_name, username, password, email, age) values ('${req.body.firstname}','${req.body.lastname}','${req.body.username}','${hash}','${req.body.email}','${req.body.age}')`)
        .then(function() {
          res.send('SUCCESS!!!')
        })
    });
  } else {
    res.send('FAILLL!!')
  };
})

module.exports = router;

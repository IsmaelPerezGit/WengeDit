var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');


//get individual user page
router.get('/:id', function(req, res, next) {
  knex.raw(`select * from userinfo where id = ${req.params.id}`)
    .then(function(users) {
      res.render('userInfo', {
        userinfo: users.rows[0],
        id: parseInt(req.params.id)
      })
    })
});

//Post/Submit login form
router.post('/login', function(req, res, next) {
  console.log(req.body)
  knex.raw(`SELECT * FROM userinfo WHERE username = '${req.body.username}'`)
    .then(function(users) {
      bcrypt.compare(req.body.password, users.rows[0].password, function(err, resp) {
        if (resp) {
          res.redirect('/users/' + users.rows[0].id)
        } else {
          res.send('Incorrect Login')
        }
      });
    });
});

//Get new user registration form
router.get('/new', function(req, res, next) {
  res.render('userNew')
});

//Post new user registration information
router.post('/new', function(req, res, next) {
  if (req.body.password === req.body.confirm) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex.raw(`insert into userinfo (first_name,last_name, username, password, email, age) values ('${req.body.firstname}','${req.body.lastname}','${req.body.username}','${hash}','${req.body.email}','${req.body.age}')`)
        .then(function() {
          res.redirect('/users/' + users.rows[0].id)
        })
    });
  } else {
    res.send('Something went wrong!!')
  };
});

//Get update form
router.get('/:id/update', function(req, res, next) {
  knex.raw(`select * from userinfo where id = '${req.params.id}'`)
    .then(function(users) {
      res.render('userUpdate', {
        userId: req.params.id
      })
    })
});

//Update user info
router.post('/:id', (req, res, next) => {
  if (req.body.password === req.body.confirmNewPass) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex.raw(`update userinfo set first_name = '${req.body.firstname}',last_name = '${req.body.lastname}', username = '${req.body.username}', password = '${hash}', email ='${req.body.email}', age ='${req.body.age}' where id = ${req.params.id} `)
        .then(function() {
          res.send('SUCCESS!!!')
        })
      console.log(req.params.id);
    });
  } else {
    res.send('Something went wrong!!')
  };
});

//Delete user
router.post('/:id/delete', function(req, res, next) {
  knex.raw(`delete from userinfo where id = ${req.params.id}`)
    .then(function() {
      res.send('Successfully Deleted!')
    })
})



module.exports = router;

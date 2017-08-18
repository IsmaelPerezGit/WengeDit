var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');


//get home page
router.get('/', function(req, res, next) {
  knex.raw(`select * from postinfo join userinfo on userinfo.id = postinfo.user_id;`)
    .then(function(data) {
      res.render('index', {
        post: data.rows,
        title: 'WengeDit',
        id: parseInt(req.params.id)
      });
    })
});

//login form
router.post('/login', function(req, res, next) {
  console.log(req.body)
  knex.raw(`SELECT * FROM users WHERE username = '${req.body.username}'`)
    .then(function(users) {
      bcrypt.compare(req.body.password, users.rows[0].password, function(err, resp) {
        if (resp) {
          res.render('userhome')
        } else {
          res.send("INCORRECT PASSWORD!!!!")
        }
      });
      // console.log();
    });
});

//get individual story
router.get('/post/:id', function(req, res, next) {
  knex.raw(`select * from postinfo join userinfo on userinfo.id = postinfo.user_id join commentinfo on commentinfo.post_id = postinfo.id where postinfo.id = ${req.params.id};`)
    .then(function(data) {
      res.render('individualPost', {
        title: 'WengeDit',
        postTitle: data.rows[0].post_content,
        comment:data.rows[0].comment_content,
        id: parseInt(req.params.id)
      });
      console.log(data.rows[0].content);
    })
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

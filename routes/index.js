var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`select * from postinfo`)
    .then(function(data) {
      res.render('index', {
        post: data.rows,
        title: 'WengeDit'
      });
      console.log(data.rows[0].name);
    })
});

//get individual story
router.get('/post/:id', function(req, res, next) {
  knex.raw(`select postinfo.content from postinfo where postinfo.id = ${req.params.id}`)
    .then(function(data) {
      res.render('individualPost', {
        postTitle: data.rows,
        title: 'WengeDit',
        storyTitle: data.rows[0].content,
        id: parseInt(req.params.id)
      });
      console.log(data.rows[0].content);
    })
});

router.get('/new_user', function(req, res, next) {
  res.render('new_user')
});

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

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

router.get('/post', function(req, res, next) {
      res.render('submitPost')
    })

router.get('/textpost', function(req, res, next) {
      res.render('submitTextPost')
    })

//get individual story
router.get('/post/:id', function(req, res, next) {
  knex.raw(`select * from postinfo join userinfo on userinfo.id = postinfo.user_id join commentinfo on commentinfo.post_id = postinfo.id where postinfo.id = ${req.params.id};`)
    .then(function(data) {
      res.render('individualPost', {
        title: 'WengeDit',
        postTitle: data.rows[0].post_content,
        comment:data.rows,
        id: parseInt(req.params.id)
      });
      console.log(data.rows[0]);
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');


//get new post form
router.get('/new', function(req, res, next) {
      res.render('postSubmitLink')
    })
//get new test post form
router.get('/newtextpost', function(req, res, next) {
      res.render('postSubmitText')
    })

//get individual post
router.get('/:id', function(req, res, next) {
  knex.raw(`select * from postinfo join userinfo on userinfo.id = postinfo.user_id join commentinfo on commentinfo.post_id = postinfo.id where postinfo.id = ${req.params.id};`)
    .then(function(data) {
      res.render('post', {
        title: 'WengeDit',
        postTitle: data.rows[0].post_content,
        comment:data.rows,
        id: parseInt(req.params.id),
        username:data.rows[0].username
      });
      console.log(data.rows[0]);
    })
});


module.exports = router;

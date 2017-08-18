var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')


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
  if (req.body.res === req.body.confirm){} 
});

module.exports = router;

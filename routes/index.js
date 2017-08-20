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
        title: 'Wengedit',
        id: parseInt(req.params.id)
      });
    })
});


module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/homepage');
});

router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Ethan\'s page' });
});

router.get('/visuals', function(req, res, next) {
  res.render('canvas', { title: 'Fibonacci' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/MarioKart', function(req, res, next) {
  res.render('MarioKart', { title: 'First Project'});
});

module.exports = router;

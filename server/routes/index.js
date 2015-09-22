var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/homepage');
});

router.get('/homepage', function(req, res, next) {
  res.render('index', { title: 'Ethan\'s page', home: 'active' });
});

router.get('/visuals', function(req, res, next) {
  res.render('canvas', { title: 'Fibonacci', visuals: 'active' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', projects: 'active' });
});

router.get('/MarioKart', function(req, res, next) {
  res.render('MarioKart', { title: 'First Project'});
});

module.exports = router;

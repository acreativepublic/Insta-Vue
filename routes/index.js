var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/splitter', function(req, res, next) {
  res.render('splitter');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/scanner/koipondcellars', function(req, res, next) {
  res.render('koipondcellars');
});
router.get('/scanner/jerusalemcafe', function(req, res, next) {
  res.render('jerusalemcafe');
});

router.get('/scanner/burntbridgecellars', function(req, res, next) {
  res.render('burntbridgecellars');
});

router.get('/scanner/tommyos', function(req, res, next) {
  res.render('tommyos');
});





router.post('/quotes', function (req, res) {

console.log('Product Created successfully');

});



const product_controller = require('../controllers/product.controller');


module.exports = router;

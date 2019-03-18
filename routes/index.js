var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});






router.post('/quotes', function (req, res) {

console.log('Product Created successfully');

});



const product_controller = require('../controllers/product.controller');


module.exports = router;

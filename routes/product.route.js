const express = require('express');
const productrouter = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
productrouter.get('/test', product_controller.test);

productrouter.use('/create', product_controller.product_create);

productrouter.post('/quotes', product_controller.quotes);

productrouter.get('/:id', product_controller.product_details);



module.exports = productrouter;

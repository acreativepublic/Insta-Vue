const Product = require('../models/product.model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Simple version, without validation or sanitation

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

 function (req, res) {
  console.log(req.body)
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://admin98:admin98@myfirstcluster-olgya.gcp.mongodb.net/test?retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("productstutorial").collection("products").save(req.body, (err, result) => {
 if (err) return console.log(err)

 console.log('saved to database')
 res.redirect('/')
});
});
};

 function(req, res) {
  let productrouter = new Product(
      {
          name: req.body.name,
          price: req.body.price
      }
  )
  res.send('Product Created successfully');
};

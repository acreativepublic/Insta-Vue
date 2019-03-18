const Product = require('../models/product.model');

//Simple version, without validation or sanitation

exports.product_create = function (req, res) {
  console.log(req.body)
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://admin98:admin98@myfirstcluster-olgya.gcp.mongodb.net/test?retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("productstutorial").collection("datedowntowncodes").save(req.body, (err, result) => {
 if (err) return console.log(err)

 console.log('saved to database')
 res.redirect('/')
});
});
};

exports.quotes = function(req, res) {
  let productrouter = new Product(
      {
          date: req.body.name,
          qrcode: req.body.price
      }
  )
  res.send('Product Created successfully');
};

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

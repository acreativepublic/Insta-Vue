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
res.redirect('/splitter')

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



 exports.product_ = function (req, res) {
  console.log(req.body)
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://admin98:admin98@myfirstcluster-olgya.gcp.mongodb.net/test?retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("productstutorial").collection("datedowntowncodes").save(req.body, (err, result) => {
 if (err) return console.log(err)

 console.log('saved to database')

});
});
};


exports.product_details = function (req, res) {
  var id = req.query.id;
 const MongoClient = require('mongodb').MongoClient;
 const uri = "mongodb+srv://admin98:admin98@myfirstcluster-olgya.gcp.mongodb.net/test?retryWrites=true";
 const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
const db = client.db('productstutorial');
const collection = db.collection('datedowntowncodes');
var query = {};
qrcodes = "qrcode";

query[qrcodes] = id;
collection.find(query).toArray((query, items)=> {

res.render('getres.ejs', {datedowntowncodes: items, code: query});




console.log(query);

console.log(id);
console.log(items);
})


  });
};

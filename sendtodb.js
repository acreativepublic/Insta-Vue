


var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/instascan', { useNewUrlParser: true }, function (err, client) {
var db = client.db('instascan');
    console.log("Switched to "+db.databaseName+" database");

    // document to be inserted
    var doc = { name: "Roshan", age: "22" };

    // insert document to 'users' collection using insertOne
    db.collection("users").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });
});

/**
 * Created by user on 23/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();
var url = 'mongodb://clszz6:clszz6@ds237713.mlab.com:37713/icp9database';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', function (req, res) {
    MongoClient.connect(url, function(err, client) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        insertDocument(client.db('icp9database'), req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
})
var insertDocument = function(db, data, callback) {
    db.collection('Users').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
var server = app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
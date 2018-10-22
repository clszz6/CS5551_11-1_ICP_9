/**
 * Created by Rohith Kumar
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://clszz6:clszz6@ds237713.mlab.com:37713/icp9database';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

/*
  url :   mongodb://clszz6:clszz6@ds237713.mlab.com:37713/icp9database
 */
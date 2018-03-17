/ Importing MongoClient
var mongoClient = require('mongodb').MongoClient;

// Importing Assert
var assert = require('assert');

// Mongo DB Url
var url = 'mongodb://Saikumar5679:Saikumar@5679@ds139984.mlab.com:39984/ase9';

//
mongoClient.connect(url, function (err,db) {
    assert.equal(null, err);
    console.log("Successfully Connected to Server");
   db.close();
})
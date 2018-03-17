// Required Mongo Client
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Mongo DB URL.
var url = 'mongodb://root:root@ds139984.mlab.com:39984/ase9';

// Mongo Insert Document Function Call.
var mongoInsertDocument = function(db, callback) {
    // Inserting Multiple Records
    db.collection('users').insertMany([{
        "userId" : 16265080,
        "firstName" : "Sai",
        "lastName": "Kumar",
        "mobileNumber" : "913-548-5534",
        "city" : "Kansas"
    },
        {
            "userId" : 16258791,
            "firstName" : "Sravya",
            "lastName": "Para",
            "mobileNumber" : "224-279-1235",
            "city" : "Chicago"
        },{
            "userId" : 16261475,
            "firstName" : "Sai",
            "lastName": "Kumar",
            "mobileNumber" : "224-279-1234",
            "city" : "Texas"
        },
        {
            "userId" : 16261476,
            "firstName" : "Sai",
            "lastName": "Kumar",
            "mobileNumber" : "224-279-1237",
            "city" : "Dallas"
        },
        {
            "userId" : 16261477,
            "firstName" : "Sraya",
            "lastName": "Para",
            "mobileNumber" : "224-279-1234",
            "city" : "Michigan"
        }], function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the collection.");
        callback();
    });
};

mongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    // Sending Database Name to the Insert Function.
    var database = client.db('ase9')
    mongoInsertDocument(database, function() {
        client.close();
    });
});
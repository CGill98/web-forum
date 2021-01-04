const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config()
 
// Connection URL
const url = process.env.DB_URL;
 
// Database Name
const dbName = process.env.DB_NAME;
 
// Use connect method to connect to the server
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  assert.strictEqual(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  exports.writeUser = (user) => {
    const userCol = db.collection('users')
    //console.log(userCol)

    userCol.insertOne(user, (err, result)=> {
        try {
            console.log("inserted one")
            console.log(user)
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    })
  }
 
  client.close();
});







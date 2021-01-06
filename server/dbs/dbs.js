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

  exports.writeUser = async (user) => {
    const userCol = db.collection('users')
    //console.log(userCol)
    const findByEmail = await userCol.findOne({"email": user.email})

    if (findByEmail) {
      console.log("found email")
      return {error: true, clientmsg: 'Account with that email already exists'}
    }

    const findByUserName = await userCol.findOne({"username": user.username})

    if (findByUserName) {
      console.log("found username")

      return {error: true, clientmsg: 'Account with that username already exists'}
    }

    const result = await userCol.insertOne(user)

    console.log(result)

    return result;

  }
 
});

process.on('exit', ()=>{
  console.log("exiting")

})






const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const hash = value => { //required for verifying passwords
  value.salt = crypto.randomBytes(6).toString('hex').slice(0, 12)
  value.password = crypto.createHash('sha256').update(`${value.salt}${value.password}`).digest('base64')
  return value
}

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

  exports.getUser = async (user) => {
    const verifyUser = () => {

    }

    const userCol = db.collection('users')
    //console.log(userCol)
    let data = userCol.findOne({email: user.usernameemail})

    if (data) {
      return verifyUser(data)
    } else { //try again with username
      data = userCol.findOne({username: user.usernameemail})
      if (data) {
        return verifyUser(data)
      } else {
        //return error 
        return  {error: true, clientmsg: 'Account with that email or username was not found.'}
      }
    }

  }
 
});

process.on('exit', ()=>{
  console.log("exiting")

})






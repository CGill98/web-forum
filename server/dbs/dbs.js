const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID
const assert = require('assert');
const crypto = require('crypto')
const zlib = require('zlib')

const hash = str => { //required for verifying passwords
  return crypto.createHash('sha256').update(str).digest('base64')
}

const errobj = msg => { //required for verifying passwords
  return {err: true, clientmsg: msg}
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

  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  exports.getUser = async (user) => {
    const verifyUser = (data) => {
        const pass = user.password
        const storedPass = data.password
        const salt = data.salt
        if (hash(`${salt}${pass}`) === storedPass) {
          return {loginsuccess: true, username: data.username}
        } else {
          //password is wrong
          return errobj('The password entered was incorrect')
        }

    }

    const userCol = db.collection('users')
    //console.log(userCol)
    let data = await userCol.findOne({email: user.emailusername})
    console.log(data)
    if (data) {
      return verifyUser(data)
    } else { //try again with username
      data = await userCol.findOne({username: user.emailusername})
      if (data) {
        return verifyUser(data)
      } else {
        //return error 
        return  {error: true, clientmsg: 'Account with that email or username was not found.'}
      }
    }

  }
  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/

  exports.writePost = async (post) => {
    console.log("writePost Called")
    const postCol = db.collection('posts')
    //console.log(userCol)

    const result = await postCol.insertOne(post)

    //console.log(result)

    return result;

  }

  exports.writeComment = async (comment) => {
    console.log("write comment Called")
    const commentCol = db.collection('comments')
    //console.log(userCol)
    if (comment.replyTo)
      comment.replyTo = JSON.parse(comment.replyTo);

    const result = await commentCol.insertOne(comment, (err, res)=> {
      if (comment.replyTo) {
        const cmtId = res.insertedId;
        console.log(cmtId)
        
        //push to or create reply from property
        comment.replyTo.map(r => { 
          commentCol.update({ _id:  ObjectId(r)}, {$push: {replyFrom: cmtId}})
        })
        
      } 

    })

 

    //console.log(result)

    return result;

  }

  exports.getPosts = async (topic) => {
    console.log("getPosts Called")
    const postCol = db.collection('posts')
    //console.log(userCol)

    return await postCol.find({topic: topic})
  }

  exports.getPost = async (postID) => {
    console.log("getPosts Called")
    const postCol = db.collection('posts')
    //console.log(userCol)
    console.log(postID)
    const res = await postCol.findOne({"_id": new ObjectId(postID)})
    //console.log(res)
    return res
  }
  
  exports.getComments = async (postID) => {
    console.log("Get Comments Called")
    const commentCol = db.collection('comments')
    //console.log(userCol)
    const res = await commentCol.find({"postID": postID})
    //console.log(res)
    return res
  }
  
 
});

process.on('exit', ()=>{
  console.log("exiting")

})






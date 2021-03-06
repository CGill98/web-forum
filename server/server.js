var express = require('express');
var app = express();
var cors = require('cors')
const dbs = require('./dbs/dbs')
const bodyParser = require('body-parser')
const fs = require('fs')

var multer  = require('multer')
var utf7 = require('utf7');

app.use(cors())

//app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 10000
  }));

app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/json'}))
//app.use(bodyParser.json({type: 'multipart/form-data', limit: '50mb'}))

app.use('/uploads', express.static(__dirname + '/storage'));

const storage = multer.diskStorage({
destination: function (req, file, cb) {
    cb(null, './storage/')
},
filename: function (req, file, cb) {
    const parts = file.mimetype.split("/")
    const path = file.fieldname + '-' + Date.now() + '.' + parts[1]
    console.log("filename")
    console.log(path)
    cb(null, path)
}
})

var upload = multer({storage: storage})



app.get('/api/topic/:topic', (req, res) => {
    //const topic = req.params.topic

    const topic = {
        id: "1",
        title: 'Philosophy',
        posts: [
            {
                id: "1",
                postId: "1",
                topic: 'Philosophy',
                title: '',
                description: '',
                img: '127.0.0.1:4000/uploads/cod.jpg',
                replies: [ "23", "27", "83"], //reply ids 
            }]
    }
    res.send("hi")
})
/*
app.get('/api/post/:post', (req, res) => {
    const postobj = req.params.post
    //a post object should have a topic
    const post = {
        id: "1",
        topic: 'Philosophy',
        title: 'post title',
        description: '',
        img: '127.0.0.1:4000/uploads/cod.jpg',
        comments: [
            {
                id: "1",
                postId: "1",
                topic: 'Philosophy',
                description: '',
                img: '127.0.0.1:4000/uploads/cod.jpg',
                replies: [ "23", "27", "83"], //reply ids 
            }]
    }
    res.json(post)
})*/

app.post('/api/register/:user', async (req, res) => {
    console.log('/api/register/:user')
    const userobj = JSON.parse(req.params.user);

    console.log(userobj)
    const result = await dbs.writeUser(userobj)
    console.log(result)
    res.json(result)
})

app.get('/api/login/:user', async (req, res) => {
    console.log('/api/register/:user')
    const userobj = JSON.parse(req.params.user);

    console.log(userobj)
    const result = await dbs.getUser(userobj)
    console.log(result)
    res.json(result)
})

app.get('/api/posts/:topic', async (req, res) => {
    console.log('/api/posts/:topic')
    const topic = req.params.topic;

    const result = await dbs.getPosts(topic)
    //console.log(result)
    result.toArray((err, data) => {
        res.json(data)
    })
})

app.get('/api/post/:postID', async (req, res) => {
    console.log('/api/post/:postID')
    const postID = req.params.postID;

    const result = await dbs.getPost(postID)
    //console.log(result)
    res.json(result)
})

app.get('/api/comments/:postID', async (req, res) => {
    console.log('/api/posts/:topic')
    const postID = req.params.postID;

    const result = await dbs.getComments(postID)
    //console.log(result)
    result.toArray((err, data) => {
        res.json(data)
    })
})

app.get('/api/image/:file', async (req, res) => {
    console.log('/api/image/:file')
    const file = req.params.file;

    res.sendFile(`C:\\Users\\Cooper\\VSCodeWorkSpace\\web-forum\\server\\storage/${file}`)
})


app.post('/api/post', upload.single('image'), async (req, res) => {
    console.log('/api/post')
    console.log(req.file)
    console.log(req.headers)

    console.log(req.body)
    //const postzip = req.body
    const post = {...req.body, image: req.file.filename}
    const result = await dbs.writePost(post)

    res.json(result)
})

app.post('/api/comment', upload.single('image'), async (req, res) => {
    console.log('/api/comment')
    //console.log(req.file)

    console.log(req.body)
    //const postzip = req.body
    const comment = req.file ? {...req.body, image: req.file.filename} : req.body
    const result = await dbs.writeComment(comment)

    res.json(result)
})


app.use((req, res, next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });


const port = 4000

console.log(`Server started on ${port} `)

app.listen(port)
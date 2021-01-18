var express = require('express');
var app = express();
var cors = require('cors')
const dbs = require('./dbs/dbs')
const bodyParser = require('body-parser')
const fs = require('fs')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
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
    console.log(result)
    result.toArray((err, data) => {
        res.json(data)
    })
})

app.post('/api/post', upload.single('image'), async (req, res) => {
    console.log('/api/post')
    console.log(req.file)
    const formData = {
        title: req.body.title
    }
    console.log(req.body)
    //const postzip = req.body
    const result = await dbs.writePost(req.body)
    


    if (req.file) {
        console.log(`./storage/${req.file.originalname}`)
        //const data = fs.readFileSync(req.file.path, {encoding:'utf7', flag:'r'}); 
        

        //const filedecoded = utf7.decode(data)
        //const utf8file = utf8.encode(filedecoded)
        fs.writeFile(`./storage/${req.file.originalname}`, req.file.buffer, 'utf8',(err)=>{
            if (err) return console.log(err);
        })
    }

    //console.log(postobj)
    res.json(result)
})

app.use((req, res, next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });


const port = 4000

console.log(`Server started on ${port} `)

app.listen(port)
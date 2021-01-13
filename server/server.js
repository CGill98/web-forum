var express = require('express');
var app = express();
var cors = require('cors')
const dbs = require('./dbs/dbs')



app.use(cors())

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

app.post('/api/post', async (req, res) => {
    console.log('/api/post/:post')
    let postzip = req.body
    console.log(req.body)
    const result = await dbs.writePost(postzip)
    console.log(postobj)
    res.json(result)
})

app.use((req, res, next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });


const port = 4000

console.log(`Server started on ${port} `)

app.listen(port)
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Comment from './components/Comment'
import FloatingForm from './components/FloatingForm'

import {Link, useParams} from 'react-router-dom'
import globalstyles from './Global.module.css'
import capy from "../assets/images/capy.png";
import poststyles from './PostStyles.module.css'
import getPost from '../api/getPost'
import post from '../api/post'
import getComments from '../api/getComments'

const Post = ({ match }) => {
    const {topic, postID} = useParams();

    const [image, setImage] = useState({
        webWidth: 200,//inbrowser
        webHeight: 300, 
        src: '',
    })

    const [postData, setPostData] = useState({}) 
    const [commentData, setCommentData] = useState([]) 

    //console.log(postData)

    //const img = postData !== undefined ? `http://127.0.0.1:4000/api/image/${postData.image}` : ''
    //const postId = postData !== undefined ? postData._id : ''
    
    //const [imgLink, setImgLink] = useState(img)
    useEffect(()=>{
        console.log("effect none")
        getPost(postID).then(p => setPostData(p))
        getComments(postID).then(c => c)
                           .then(c => {
                               //const cmt = c.map(cmt => { ...cmt, replyTo: JSON.parse(cmt.replyTo)}))
                               console.log(c)
                               let cmts = [] 
                               for (let i = 0; i < c.length; i++) {
                                    console.log(`loop ${i}`)
                                   let cmt = Object.create(c[i])
                                   if (cmt.replyTo)
                                        cmt.replyTo = JSON.parse(cmt.replyTo);
                                   cmts.push(cmt)
                               }
                               console.log(cmts)
                               setCommentData(cmts)
                            })
    }, [])

    useEffect(()=>{

        if (postData.image) {

            var imageHelper = new Image();

            imageHelper.onload = () => {
                setImage({...imageHelper, webWidth: imageHelper.width * (250 / imageHelper.height), webHeight: 250, src: imageHelper.src})
                
            }
        
            imageHelper.src = `http://127.0.0.1:4000/api/image/${postData.image}`

        }
    }, [postData])


    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <FloatingForm postID={postID}/>
                <div className={poststyles.post}>
                    <h1>{postData.title}</h1>
                    <p>
                        <img src={image.src} width={image.webWidth} height={image.webHeight}></img>
                        {postData.text}
                    </p>
                </div>
                {commentData.length !== 0 && commentData.map((c, index) => <Comment commentData={c} key={index}/>)}


            </div>
        </div>
    )
}

export default Post

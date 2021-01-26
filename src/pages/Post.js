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
import { ImageComponent } from 'react-native'

const Post = ({ match }) => {
    const {topic, postID} = useParams();
    console.log(topic)
    console.log(postID)

    const [image, setImage] = useState({
        webWidth: 200,//inbrowser
        webHeight: 300, 
        src: '',
    })

    const [postData, setPostData] = useState({}) 
    //console.log(postData)

    //const img = postData !== undefined ? `http://127.0.0.1:4000/api/image/${postData.image}` : ''
    //const postId = postData !== undefined ? postData._id : ''
    
    //const [imgLink, setImgLink] = useState(img)
    useEffect(()=>{
        console.log("effect none")
        getPost(postID).then(p => setPostData(p))
    }, [])

    useEffect(()=>{

        if (postData.image) {

            var imageHelper = new Image();

            imageHelper.onload = function(){
                setImage({...imageHelper, webWidth: imageHelper.width * (250 / imageHelper.height), webHeight: 250})
                setImage({...image, src: imageHelper.src})
                
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
                    <img src={image.src} width={image.webWidth} height={image.webHeight}></img>
                    <div>
                        {postData.text}
                    </div>
                </div>

                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />

            </div>
        </div>
    )
}

export default Post

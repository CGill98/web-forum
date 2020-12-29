import React from 'react'
import Header from './components/Header'
import Comment from './components/Comment'
import FloatingForm from './components/FloatingForm'

import {Link, useParams} from 'react-router-dom'
import globalstyles from './Global.module.css'
import capy from "../assets/images/capy.png";
import poststyles from './PostStyles.module.css'
import topicstyles from './TopicStyles.module.css'


const Post = ({ match }) => {
    const {topic, postID} = useParams();
    console.log(topic)
    console.log(postID)


    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <FloatingForm />
                <div className={poststyles.post}>
                    <h1>The Post title</h1>
                    <img src={capy} width='200' height='100'></img>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum aliquam sodales. Suspendisse mattis metus sit amet orci elementum...
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

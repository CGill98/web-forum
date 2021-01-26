import React, {useReducer, useEffect, useState, createRef} from 'react'
import Header from './components/Header'
import PostDivLink from './components/PostDivLink'

import {Link, useParams} from 'react-router-dom'
import globalstyles from './Global.module.css'
import topicstyles from './TopicStyles.module.css'

import headphones from '../assets/images/headphones.png'
import capy from '../assets/images/capy.png'
import post from '../api/post'
import getPosts from '../api/getPosts'

const initFormState = {
    topic: '',
    title: 'Kants critique of pure..',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas nunc quis ornare. Etiam id sollicitudin risus. Ut sit amet ligula libero. Integer ultrices mauris vel efficitur eleifend. Nunc rhoncus ligula vel scelerisque molestie. Vestibulum vel nunc mattis mauris tristique ornare sit amet tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus finibus egestas. Etiam eu lorem sed lacus dapibus luctus nec et lorem. Etiam a massa purus. Mauris rutrum quam eu lectus porttitor, vitae consectetur diam pretium.
    Nunc mollis elit et ipsum porta gravida. Curabitur elementum vehicula diam eu porta. Vestibulum tempor ex ultricies, bibendum libero quis, commodo felis. In hendrerit pharetra lobortis. Etiam eget quam vel neque malesuada mattis at non nisi. Nunc sit amet maximus orci, vel sodales dui. Etiam bibendum velit vel interdum egestas. Pellentesque vel eros sed turpis porta porta id sed lacus. Praesent commodo sem nisl, eget congue felis fermentum vel. Donec sodales lectus sed gravida vulputate. Proin fermentum turpis vel sodales mollis. Duis ac erat eu risus sodales placerat ac vitae quam. Fusce non leo fringilla, malesuada lorem ac, feugiat dolor.
    Quisque eleifend egestas ex, at vehicula risus tempus vel. Maecenas bibendum maximus sem non tempus. Ut rhoncus neque a dapibus consectetur. Sed ornare dignissim orci in vestibulum. Donec eget odio sed nisi faucibus sagittis. Quisque accumsan, elit id ultricies facilisis, leo justo accumsan diam, a mattis massa lacus nec massa. Aliquam mattis tellus tristique augue sodales egestas quis quis elit. Nam eu venenatis metus, vel lacinia purus.`,
    image: {name: ''},
    form_error: ''
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'topic':
            return {...state, topic: action.payload}
        case 'title':
            return {...state, title: action.payload}
        case 'text':
            return {...state, text: action.payload}
        case 'image':
            return {...state, image: action.payload}   
        case 'form_error':
            return {...state, form_error: action.payload};
        default:
            return state
    }
}


const Topic = ({ match }) => {
    const {topic} = useParams()
    const pageTitle = `${topic[0].toUpperCase()}${topic.slice(1)}` 
    const [state, dispatch] = useReducer(formReducer, initFormState)
    const [posts, setPosts] = useState([])

    const imageInput = createRef() 

    useEffect(() => {
        dispatch({type: 'topic', payload: topic})
        console.log("get posts")

        getPosts(topic, dispatch).then(p => {
            setPosts(p)
        })
    }, [])
    /*
    useEffect(() => {
        console.log(posts)
    }, [posts])*/

    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <h1 className={globalstyles.centeredtext}>{pageTitle}</h1>
                <div className={topicstyles.formdiv}>   
                    <h2>Make a Post</h2>
                    <form className={topicstyles.newpostform} encType='multipart/form-data' onSubmit={e => post(e, state, dispatch)}/*createPost()*/>
                        {state.form_error && <h2 className={topicstyles.formerror}>{state.form_error}</h2>}
                        
                        <label>Post Title</label>
                        <input required type="text" name="title" value={state.title} onChange={(e)=>{dispatch({type: 'title', payload: e.target.value})}}/>
                        <label>Description</label>
                        <textarea required className={topicstyles.textarea} value={state.text} onChange={(e)=>{dispatch({type: 'text', payload: e.target.value})}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas nunc quis ornare. Etiam id sollicitudin risus. Ut sit amet ligula libero. Integer ultrices mauris vel efficitur eleifend. Nunc rhoncus ligula vel scelerisque molestie. Vestibulum vel nunc mattis mauris tristique ornare sit amet tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus finibus egestas. Etiam eu lorem sed lacus dapibus luctus nec et lorem. Etiam a massa purus. Mauris rutrum quam eu lectus porttitor, vitae consectetur diam pretium.

Nunc mollis elit et ipsum porta gravida. Curabitur elementum vehicula diam eu porta. Vestibulum tempor ex ultricies, bibendum libero quis, commodo felis. In hendrerit pharetra lobortis. Etiam eget quam vel neque malesuada mattis at non nisi. Nunc sit amet maximus orci, vel sodales dui. Etiam bibendum velit vel interdum egestas. Pellentesque vel eros sed turpis porta porta id sed lacus. Praesent commodo sem nisl, eget congue felis fermentum vel. Donec sodales lectus sed gravida vulputate. Proin fermentum turpis vel sodales mollis. Duis ac erat eu risus sodales placerat ac vitae quam. Fusce non leo fringilla, malesuada lorem ac, feugiat dolor.

Quisque eleifend egestas ex, at vehicula risus tempus vel. Maecenas bibendum maximus sem non tempus. Ut rhoncus neque a dapibus consectetur. Sed ornare dignissim orci in vestibulum. Donec eget odio sed nisi faucibus sagittis. Quisque accumsan, elit id ultricies facilisis, leo justo accumsan diam, a mattis massa lacus nec massa. Aliquam mattis tellus tristique augue sodales egestas quis quis elit. Nam eu venenatis metus, vel lacinia purus.
                        </textarea>
                        <label>Image (PNG, JPG, GIF)</label>
                        <input type='file' name='image' ref={imageInput} charSet='utf-8' required onChange={(e)=>{
                            console.log(e.target.files)
                            if (['image/png','image/jpeg','image/gif'].includes(e.target.files[0].type)) {
                                dispatch({type: 'image', payload: e.target.files[0]})
                            } else {
                                //change state 'this file type is not allowed'
                                dispatch({type: 'form_error', payload: 'File type is not accepted'})

                            }   
                            
                            }}></input>
                        <input type="submit" value="Submit" className={topicstyles.submitbtn}/>
                    </form>
                </div>
                <div className={topicstyles.postlinkdivcontainer}>
                    {/*
                    <PostDivLink imgLink={capy} id={1} />
                    <PostDivLink imgLink={headphones} id={2}/>
                    <PostDivLink id={3}/>
                    <PostDivLink id={4}/>
                    <PostDivLink id={5}/>
                    */} 
                {posts.length !== 0 && posts.map((p, index) => <PostDivLink postData={p} /*id={6}*/ key={index}/>)}
                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topic

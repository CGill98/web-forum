import React, {useState, useEffect, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import comment from '../../api/comment'
import formstyle from './FloatingForm.module.css'

const initFormState = {
    title: 'Kants critique of pure..',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas nunc quis ornare. Etiam id sollicitudin risus. Ut sit amet ligula libero. Integer ultrices mauris vel efficitur eleifend. Nunc rhoncus ligula vel scelerisque molestie. Vestibulum vel nunc mattis mauris tristique ornare sit amet tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus finibus egestas. Etiam eu lorem sed lacus dapibus luctus nec et lorem. Etiam a massa purus. Mauris rutrum quam eu lectus porttitor, vitae consectetur diam pretium.
    Nunc mollis elit et ipsum porta gravida. Curabitur elementum vehicula diam eu porta. Vestibulum tempor ex ultricies, bibendum libero quis, commodo felis. In hendrerit pharetra lobortis. Etiam eget quam vel neque malesuada mattis at non nisi. Nunc sit amet maximus orci, vel sodales dui. Etiam bibendum velit vel interdum egestas. Pellentesque vel eros sed turpis porta porta id sed lacus. Praesent commodo sem nisl, eget congue felis fermentum vel. Donec sodales lectus sed gravida vulputate. Proin fermentum turpis vel sodales mollis. Duis ac erat eu risus sodales placerat ac vitae quam. Fusce non leo fringilla, malesuada lorem ac, feugiat dolor.
    Quisque eleifend egestas ex, at vehicula risus tempus vel. Maecenas bibendum maximus sem non tempus. Ut rhoncus neque a dapibus consectetur. Sed ornare dignissim orci in vestibulum. Donec eget odio sed nisi faucibus sagittis. Quisque accumsan, elit id ultricies facilisis, leo justo accumsan diam, a mattis massa lacus nec massa. Aliquam mattis tellus tristique augue sodales egestas quis quis elit. Nam eu venenatis metus, vel lacinia purus.`,
    image: {name: ''},
    username: '',
    postID: '', 
    reply_to: [],
    form_error: ''
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'title':
            return {...state, title: action.payload}
        case 'text':
            return {...state, text: action.payload}
        case 'image':
            return {...state, image: action.payload}   
        case 'postID':
            return {...state, postID: action.payload}  
        case 'username':
            return {...state, username: action.payload}  
        case 'reply_to':
            return {...state, reply_to: action.payload};
        case 'form_error':
            return {...state, form_error: action.payload};
        default:
            return state
    }
}


const FloatingForm = (postID) => {

    const handleFormSubmit = e => {
        console.log(replies.map(r => r.id))
        dispatch({type: 'reply_to', payload: replies.map(r => r.id)})
        comment(formState, e, dispatch)
    }

    const [maximised, setMaximised] = useState(false)
    const [formState, dispatch] = useReducer(formReducer, initFormState)
    const user = useSelector(state => state.user)
    const cmt = useSelector(state => state.comment)
    const replies = cmt.replies 
    const globalDispatch = useDispatch()
    //const temp = rep.map(r => {return {id: r.id, cross: false}})
    //console.log(temp)
    //const [replies, setReplies] = useState([])
    console.log(replies)

    const toggleSize = () => {
        setMaximised(!maximised)
    }

    useState(()=>{    
        dispatch({type: 'postID', payload: postID})

        console.log(user)
        dispatch({type: 'username', payload: user.name ? user.name : 'Anonymous'}) 
        //setReplies(temp)
    })


    return (
    <div className={maximised ? formstyle.formdiv : formstyle.formdivminimised}>   
        <div className={formstyle.header}>
            <h2>Make a Comment</h2>
            <span className={formstyle.minmaxbtn} onClick={toggleSize}>{maximised ? 'Minimise' : 'Maximise'}</span>
        </div>
        <form className={formstyle.newpostform} onSubmit={e => handleFormSubmit(e)}>
            <label>Reply To</label>
            <ul className={formstyle.replylist}>
                {replies.map(r => <li onClick={() => globalDispatch({type:'switch_cross', payload: r})}>{`${r.id.slice(0, 6)}...`} {r.cross && <span onClick={() => globalDispatch({type:'remove_reply', payload: r})}>X</span>}</li>)}
            </ul>
            <label>Description</label>
            <textarea className={formstyle.textarea} onChange={e => dispatch({type:'text', payload: e.target.value})}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas nunc quis ornare. Etiam id sollicitudin risus. Ut sit amet ligula libero. Integer ultrices mauris vel efficitur eleifend. Nunc rhoncus ligula vel scelerisque molestie. Vestibulum vel nunc mattis mauris tristique ornare sit amet tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus finibus egestas. Etiam eu lorem sed lacus dapibus luctus nec et lorem. Etiam a massa purus. Mauris rutrum quam eu lectus porttitor, vitae consectetur diam pretium.

Nunc mollis elit et ipsum porta gravida. Curabitur elementum vehicula diam eu porta. Vestibulum tempor ex ultricies, bibendum libero quis, commodo felis. In hendrerit pharetra lobortis. Etiam eget quam vel neque malesuada mattis at non nisi. Nunc sit amet maximus orci, vel sodales dui. Etiam bibendum velit vel interdum egestas. Pellentesque vel eros sed turpis porta porta id sed lacus. Praesent commodo sem nisl, eget congue felis fermentum vel. Donec sodales lectus sed gravida vulputate. Proin fermentum turpis vel sodales mollis. Duis ac erat eu risus sodales placerat ac vitae quam. Fusce non leo fringilla, malesuada lorem ac, feugiat dolor.

Quisque eleifend egestas ex, at vehicula risus tempus vel. Maecenas bibendum maximus sem non tempus. Ut rhoncus neque a dapibus consectetur. Sed ornare dignissim orci in vestibulum. Donec eget odio sed nisi faucibus sagittis. Quisque accumsan, elit id ultricies facilisis, leo justo accumsan diam, a mattis massa lacus nec massa. Aliquam mattis tellus tristique augue sodales egestas quis quis elit. Nam eu venenatis metus, vel lacinia purus.
            </textarea>
            <input type='file' name='image' charSet='utf-8' onChange={(e)=>{
                console.log(e.target.files)
                if (['image/png','image/jpeg','image/gif'].includes(e.target.files[0].type)) {
                    dispatch({type: 'image', payload: e.target.files[0]})
                } else {
                    //change state 'this file type is not allowed'
                    dispatch({type: 'form_error', payload: 'File type is not accepted'})

                }   
                
                }}></input>
            <input type="submit" value="Submit" className={formstyle.submitbtn}/>
        </form>
    </div>
    )
}

export default FloatingForm

import React, {useState, useEffect, useReducer} from 'react'
import { useSelector } from 'react-redux'
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
        case 'form_error':
            return {...state, form_error: action.payload};
        default:
            return state
    }
}


const FloatingForm = (postID) => {

    const [maximised, setMaximised] = useState(false)
    const [formState, dispatch] = useReducer(formReducer, initFormState)
    const user = useSelector(state => state.user)

    const toggleSize = () => {
        setMaximised(!maximised)
    }

    useState(()=>{    
    dispatch({type: 'postID', payload: postID})

    console.log(user)
    dispatch({type: 'username', payload: user.name ? user.name : 'Anonymous'}) 
    })


    return (
    <div className={maximised ? formstyle.formdiv : formstyle.formdivminimised}>   
        <div className={formstyle.header}>
            <h2>Make a Comment</h2>
            <span className={formstyle.minmaxbtn} onClick={toggleSize}>{maximised ? 'Minimise' : 'Maximise'}</span>
        </div>
        <form className={formstyle.newpostform} onSubmit={e => comment(formState, e, dispatch)}>
            <label>Reply To</label>
            <input type="text" name="replyto" value='user 1'/> 
            <ul className={formstyle.replylist}>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>

            </ul>
            <label>Description</label>
            <textarea className={formstyle.textarea}>
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

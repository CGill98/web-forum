
const comment = async (state, event, dispatch) => {
    event.preventDefault()

    let {form_error, ...value} = state; //copy all info execept form error
    console.log(value)
    value.timeAdded = new Date().getTime() //UTC time since 1970...

    console.log(event.target)
    let commentPost = new FormData(event.target)
   
    commentPost.set('username', value.username)
    commentPost.set('timeAdded', value.timeAdded)
    commentPost.set('postID', value.postID.postID)
    commentPost.set('text', value.text)
    console.log(value.reply_to)
    const replyTo = value.reply_to
    console.log(replyTo.length)
    
    if (0 < value.reply_to.length)
        commentPost.set('replyTo', JSON.stringify(value.reply_to));

    if (value.image.name) {
      commentPost.set('image', value.image, value.image.name)
    }

    console.log(commentPost)
    
    const result = await fetch(`http://127.0.0.1:4000/api/comment`, {
                                method: 'POST',
                                mode: 'cors',
                                body: commentPost,
                            }).then(res => res.text()).catch(err => {console.log(err); return err})
    
    console.log(result)
    if (result.err) {
      console.log("changing err msg")
      dispatch({type:'form_error', payload: result.clientmsg})
    }


    return result;
}

export default comment

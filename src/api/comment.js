
const comment = async (state, event, dispatch) => {
    event.preventDefault()

    let {form_error, ...value} = state; //copy all info execept form error
    console.log(value)
    value.username = 'derek'
    value.timeAdded = new Date().getTime() //UTC time since 1970...

    console.log(event.target)
    let commentPost = new FormData(event.target)
   
    commentPost.set('username', value.username)
    commentPost.set('timeAdded', value.timeAdded)
    commentPost.set('postID', value.postID)
    commentPost.set('text', value.text)
    if (value.image.name) {
      commentPost.set('image', value.image, value.image.name)
    }
    
    const result = await fetch(`http://127.0.0.1:4000/api/comment`, {
                                method: 'POST',
                                mode: 'cors',
                                body: commentPost,
                                /*
                                headers: {
                                  'Content-Type': 'undefined; charset=UTF-8;',
                                }*/
                            }).then(res => res.text()).catch(err => {console.log(err); return err})
    
    console.log(result)
    if (result.err) {
      console.log("changing err msg")
      dispatch({type:'form_error', payload: result.clientmsg})
    }


    return result;
}

export default comment

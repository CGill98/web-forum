
const post = async (event, state, dispatch) => {
    event.preventDefault()

    let {form_error, ...value} = state; //copy all info execept form error
    console.log(value)
    value.username = 'derek'
    value.timeAdded = new Date().getTime() //UTC time since 1970...

    console.log(event.target)
    let formPost = new FormData(event.target)
   
    formPost.set('username', value.username)
    formPost.set('timeAdded', value.timeAdded)
    formPost.set('title', value.title)
    formPost.set('text', value.text)
    formPost.set('topic', value.topic)
    if (value.image.name) {
      formPost.set('image', value.image, value.image.name)
    }


    //console.log(formPost.get('image'))
    //const jsonStr = JSON.stringify(value)

    //const compressedData = zlib.Gzip(jsonStr)
    //console.log(compressedData)

    
    const result = await fetch(`http://127.0.0.1:4000/api/post`, {
                                method: 'POST',
                                mode: 'cors',
                                body: formPost,
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

export default post
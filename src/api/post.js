
const post = async (event, state, dispatch) => {
    event.preventDefault()

    let {form_error, ...value} = state; //copy all info execept form error
    console.log(value)
    value.username = 'derek'
    value.timeAdded = new Date().getTime() //UTC time since 1970...
    let formPost = new FormData()
   
    formPost.append('username', value.username)
    formPost.append('timeAdded', value.timeAdded)
    formPost.append('title', value.title)
    formPost.append('text', value.text)
    formPost.append('topic', value.topic)
    if (value.image.name) {
      formPost.append('image', value.image, value.image.name)
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
                                  'Content-Type': 'multipart/form-data',
                                }*/
                            }).then(res => res.json()).catch(err => {console.log(err); return err})
    
    console.log(result)
    if (result.err) {
      console.log("changing err msg")
      dispatch({type:'form_error', payload: result.clientmsg})
    }


    return result;
}

export default post
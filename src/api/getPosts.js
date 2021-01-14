
const getPosts = async (topic, dispatch) => {

    const result = await fetch(`http://127.0.0.1:4000/api/posts/${topic}`, {
                                mode: 'cors',
                            }).then(res => res.json()).catch(err => {console.log(err); return err})
    
    console.log(result)
    if (result.err) {
      console.log("changing err msg")
      dispatch({type:'form_error', payload: result.clientmsg})
    }

    return result;
}

export default getPosts
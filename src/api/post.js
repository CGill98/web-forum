const post = async (event, state, dispatch) => {
    event.preventDefault()

    let {form_error, ...value} = state; //copy all info execept form error
    console.log(value)
    value.username = state

    const result = await fetch(`http://127.0.0.1:4000/api/post/${JSON.stringify(value)}`, {
                                method: 'POST',
                                mode: 'cors'
                            }).then(res => res.json())
                              .catch(err => {console.log(err); return err})
    
    console.log(result)
    if (result.err) {
      console.log("changing err msg")
      dispatch({type:'form_error', payload: result.clientmsg})
    }

    return result;
}

export default post
const crypto = require('crypto')

const hash = value => {
  value.salt = crypto.randomBytes(6).toString('hex').slice(0, 12)
  value.password = crypto.createHash('sha256').update(`${value.salt}${value.password}`).digest('base64')
  return value
}

const register = async (event, state, dispatch) => {
    event.preventDefault()

    //check password matches
    if (state.password !== state.passwordrentry) {
      //modify state
      dispatch({type: 'form_error', payload: "Passwords do not match"})

      return;
    }

    let {form_error, passwordrentry, ...value} = state; //copy all info execept form error
    console.log(value)

    value = hash(value)

    const result = await fetch(`http://127.0.0.1:4000/api/register/${JSON.stringify(value)}`, {
                                method: 'POST',
                                mode: 'cors'
                            }).then(res => res.json())
                              .catch(err => {console.log(err); return err})
    console.log(result)
    if (result.error) {
      console.log("changing err msg")
      dispatch({type:'form_error', payload: result.clientmsg})
    }

}

export default register

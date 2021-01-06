import React, {useReducer} from 'react'
import Header from './components/Header'
import globalstyles from './Global.module.css'
import styles from './Login.module.css'
import register from "../api/register";

const initFormState = {
    email: 'test@email.com',
    username: 'testuser',
    password: 'mytestpass',
    passwordrentry: 'mytestpass',
    form_error: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
          return {...state, email: action.payload};
        case 'username':
          return {...state, username: action.payload};
        case 'password':
          return {...state, password: action.payload};
        case 'passwordrentry':
          return {...state, passwordrentry: action.payload};
        case 'form_error':
            return {...state, form_error: action.payload};
        default:
          return state
      }
}

const Register = () => {
    const [state, dispatch] = useReducer(reducer, initFormState)

    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>

                <form className={styles.loginform} onSubmit={(e)=>register(e, state, dispatch)}>
                    {state.form_error && <div className={styles.formerror}>{state.form_error}</div>}
                    <div>Email</div>
                    <input type='text' name='email' placeholder="Example@mailservice.com" 
                        value={state.email} onChange={(e)=>dispatch({type: 'email', payload: e.target.value})}></input>
                    <div>Username or Email</div>
                    <input type='text' name='username' placeholder="Username" 
                        value={state.username} onChange={(e)=>dispatch({type: 'username', payload: e.target.value})}></input>
                    <div>Password</div>
                    <input type='password' name='password' placeholder='Password'
                        value={state.password} onChange={(e)=>dispatch({type: 'password', payload: e.target.value})}></input>
                    <input type='password' name='passwordrentry' placeholder='Repeat Password'
                        value={state.passwordrentry} onChange={(e)=>dispatch({type: 'passwordrentry', payload: e.target.value})}></input>
                    <input type='submit' value='Login' className={styles.loginbtn}></input>
                    
                </form>
            </div>
        </div>
    )
}

export default Register

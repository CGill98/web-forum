import React, {useReducer} from 'react'
import Header from './components/Header'
import globalstyles from './Global.module.css'
import styles from './Login.module.css'
import login from '../api/login.js'
import {useDispatch} from 'react-redux'


const initFormState = {
    emailusername: 'test@email.com',
    password: 'mytestpass',
    form_error: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'emailusername':
          return {...state, emailusername: action.payload};
        case 'password':
          return {...state, password: action.payload};
        case 'form_error':
            return {...state, form_error: action.payload};
        default:
          return state
      }
}
const Login = () => {
    const [state, dispatch] = useReducer(reducer, initFormState)
    const globalDispatch = useDispatch()

    const handleSubmit = (e) => {
        const result = login(e)
        console.log(result)
    }

    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <form className={styles.loginform} onSubmit={e=>handleSubmit(e)}>
                    <div>Username or Email</div>
                    <input type='text' placeholder="UsernameEmail" value={state.usernameemail} onChange={(e)=>dispatch({type: 'email', payload: e.target.value})}></input>
                    <div>Password</div>
                    <input type='password' placeholder="password" value={state.password} onChange={(e)=>dispatch({type: 'email', payload: e.target.value})}></input>
                    <input type='submit' value='Login' className={styles.loginbtn}></input>
                    <div>
                        Forgot your details?
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

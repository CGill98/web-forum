import React from 'react'
import Header from './components/Header'
import globalstyles from './Global.module.css'
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <form className={styles.loginform}>
                    <div>Username or Email</div>
                    <input type='text' placeholder="UsernameEmail"></input>
                    <div>Password</div>
                    <input type='password' placeholder="password"></input>
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

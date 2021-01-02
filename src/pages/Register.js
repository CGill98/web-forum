import React from 'react'

const Register = () => {
    return (
        <div>
            <form>
                <div>Email</div>
                <input type='text' defaultValue="Example@mailservice.com"></input>
                <div>Username or Email</div>
                <input type='text' defaultValue="Username"></input>
                <div>Password</div>
                <input type='password' defaultValue="password"></input>
                <input type='password' value='Submit'></input>
            </form>
        </div>
    )
}

export default Register

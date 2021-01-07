import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import style from './header.module.css'
//logo colour #BA1500
import logo from '../../assets/images/orangutan-red.png'
import {useStore} from 'react-redux'

export default function Header() {
  const user = useStore().getState().user
  console.log(user)

  return (
        <div className={style.header}>
          <Link to='/'>
            <div className={style.brand}>
                <img src={logo} height='70' width='70'></img>
                <h1>Web Forum</h1>
            </div>
          </Link>

          
            <ul className={style.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/dumb'>Dumb</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

            <div className={style.profilediv}>
              {user.name ?
                <h3>Hi Sally Do</h3>:
                <div className={style.profilelinks}>
                  <Link to='/login'>
                    <h3>Login</h3>
                  </Link>
                  <Link to='/register'>
                    <h3>Register</h3>
                  </Link>
                </div>
              }
            </div>
        </div>
  )
}
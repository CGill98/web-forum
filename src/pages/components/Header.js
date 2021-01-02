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

export default function Header() {
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
              {false ?
                <h3>Hi Sally Do</h3>:
                <div>
                <Link to='/login'>
                  <h3>Login</h3>
                </Link>
                <Link to='/register'>
                  <h4>Register</h4>
                </Link>
                </div>
              }
            </div>
        </div>
  )
}
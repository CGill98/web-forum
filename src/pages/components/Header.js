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
          <div className={style.brand}>
            <img src={logo} height='70' width='70'></img>
            <h1>Web Forum</h1>
          </div>
          
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
        </div>
  )
}
import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import style from './header.module.css'
//logo colour #BA1500
import logo from '../../assets/images/orangutan-red.png'
import {useSelector, useDispatch} from 'react-redux'

export default function Header() {
  let user = useSelector(state => state.user)
  const [usrPrsd, setUsrPrsd] = useState(true)
  const globalDispatch = useDispatch()

  const logout = () => {
    globalDispatch({type: 'logout'})
  }

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
                <>
                  {usrPrsd ? <h3 className={style.username} onClick={()=>setUsrPrsd(!usrPrsd)}>Hi {user.name}</h3>:
                    <div className={style.profilelinks}> 
                      <h3 onClick={logout}>Log Out</h3>
                      <h3 onClick={()=>setUsrPrsd(!usrPrsd)}>Don't Log Out</h3>
                      <Link to='/settings'>
                        <h4>Settings</h4>
                      </Link>

                    </div>}
                </>
                :
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
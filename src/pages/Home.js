import React from 'react'
import Header from './components/Header'
import PostDivLink from './components/PostDivLink'

import {Link} from 'react-router-dom'
import globalstyles from './Global.module.css'
import homestyles from './HomeStyles.module.css'

const Home = () => {
    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <div className={homestyles.topicsdiv}>
                    <h1>Topics</h1>
                    <div className={homestyles.topiclists}> 
                        <ul className={homestyles.topicsection}>
                            <h2>Education</h2>
                            <li>
                                <Link to='/philosophy'>
                                    Philosophy
                                </Link>
                            </li>
                            <li>
                                <Link to='/science'>
                                    Science
                                </Link>
                            </li>
                            <li>
                                <Link to='/programming'>
                                    Programming
                                </Link>
                            </li>
                            <li>
                                <Link to='/history'>
                                    History
                                </Link>
                            </li>
                        </ul>
                        <ul className={homestyles.topicsection}>
                            <h2>Hobbies</h2>
                            <li>
                                <Link to='/sports'>
                                    Sports
                                </Link>
                            </li>
                            <li>
                                <Link to='/science'>
                                    Art
                                </Link>
                            </li>
                            <li>
                                <Link to='/programming'>
                                    Programming
                                </Link>
                            </li>
                            <li>
                                <Link to='/history'>
                                    History
                                </Link>
                            </li>
                        </ul>
                        <ul className={homestyles.topicsection}>
                            <h2>Education</h2>
                            <li>
                                <Link to='/philosophy'>
                                    Philosophy
                                </Link>
                            </li>
                            <li>
                                <Link to='/science'>
                                    Science
                                </Link>
                            </li>
                            <li>
                                <Link to='/programming'>
                                    Programming
                                </Link>
                            </li>
                            <li>
                                <Link to='/history'>
                                    History
                                </Link>
                            </li>
                        </ul>
                        <ul className={homestyles.topicsection}>
                            <h2>Education</h2>
                            <li>
                                <Link to='/philosophy'>
                                    Philosophy
                                </Link>
                            </li>
                            <li>
                                <Link to='/science'>
                                    Science
                                </Link>
                            </li>
                            <li>
                                <Link to='/programming'>
                                    Programming
                                </Link>
                            </li>
                            <li>
                                <Link to='/history'>
                                    History
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={homestyles.trendingpostsdiv}>
                    <h1>Trending Posts</h1>

                    {/*}
                    <PostDivLink trending={true} id={1}/>
                    <PostDivLink trending={true} id={2}/>
                    <PostDivLink trending={true} id={3}/>
                    <PostDivLink trending={true} id={4}/>
                    */}
                </div>
            </div>
        </div>
    )
}

export default Home

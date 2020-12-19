import React from 'react'
import Header from './components/Header'
import TrendingTopic from './components/TrendingTopic'

import {Link} from 'react-router-dom'
import globalstyles from './Global.module.css'
import homestyles from './HomeStyles.module.css'

const Home = () => {
    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
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
            <div>
                <h1>Trending Posts</h1>
                <div className={homestyles.trendingpost}>
                    <Link to='/philosophy/1'>
                        <h2>The Problem of Induction</h2> 
                        <h3>On Philosophy</h3>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum aliquam sodales. Suspendisse mattis metus sit amet orci elementum...
                        </div>
                    </Link>
                </div>
                <TrendingTopic />
                <TrendingTopic />
                <TrendingTopic />
            </div>
        </div>
    )
}

export default Home

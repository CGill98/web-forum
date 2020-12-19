import React from 'react'
import {Link} from 'react-router-dom'
import homestyles from '../HomeStyles.module.css'

const TrendingTopic = () => {
    return (
    <div className={homestyles.trendingpost}>
        <Link to='/philosophy/1'>
            <h2>The Problem of Induction</h2> 
            <h3>On Philosophy</h3>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum aliquam sodales. Suspendisse mattis metus sit amet orci elementum...
            </div>
        </Link>
    </div>
    )
}

export default TrendingTopic

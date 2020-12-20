import React from 'react'
import Header from './components/Header'
import TrendingPost from './components/TrendingPost'

import {Link, useParams} from 'react-router-dom'
import globalstyles from './Global.module.css'
import homestyles from './HomeStyles.module.css'



const Topic = ({ match }) => {
    const {topic} = useParams()
    const pageTitle = `${topic[0].toUpperCase()}${topic.slice(1)}` 


    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <h1>{pageTitle}</h1>
                <div>
                    <TrendingPost />
                    <TrendingPost />
                    <TrendingPost />
                    <TrendingPost />
                    <TrendingPost />

                </div>
            </div>
        </div>
    )
}

export default Topic

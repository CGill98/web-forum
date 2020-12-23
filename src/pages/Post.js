import React from 'react'
import Header from './components/Header'
import PostDivLink from './components/PostDivLink'

import {Link, useParams} from 'react-router-dom'
import globalstyles from './Global.module.css'
import homestyles from './HomeStyles.module.css'

const Post = ( ) => {
    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <h1>The Post title</h1>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Post

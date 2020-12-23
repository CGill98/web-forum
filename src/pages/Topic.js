import React from 'react'
import Header from './components/Header'
import PostDivLink from './components/PostDivLink'

import {Link, useParams} from 'react-router-dom'
import globalstyles from './Global.module.css'
import topicstyles from './TopicStyles.module.css'

const Topic = ({ match }) => {
    const {topic} = useParams()
    const pageTitle = `${topic[0].toUpperCase()}${topic.slice(1)}` 


    return (
        <div className={globalstyles.page}>
            <Header />
            <div className={globalstyles.content}>
                <h1>{pageTitle}</h1>
                <div className={topicstyles.formdiv}>   
                    <h2>Make a Post</h2>
                    <form className={topicstyles.newpostform}>
                        <label>Post Title</label>
                        <input type="text" name="title" value='Kants critique of pure..'/>
                        <label>Description</label>
                        <textarea className={topicstyles.textarea}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas nunc quis ornare. Etiam id sollicitudin risus. Ut sit amet ligula libero. Integer ultrices mauris vel efficitur eleifend. Nunc rhoncus ligula vel scelerisque molestie. Vestibulum vel nunc mattis mauris tristique ornare sit amet tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus finibus egestas. Etiam eu lorem sed lacus dapibus luctus nec et lorem. Etiam a massa purus. Mauris rutrum quam eu lectus porttitor, vitae consectetur diam pretium.

Nunc mollis elit et ipsum porta gravida. Curabitur elementum vehicula diam eu porta. Vestibulum tempor ex ultricies, bibendum libero quis, commodo felis. In hendrerit pharetra lobortis. Etiam eget quam vel neque malesuada mattis at non nisi. Nunc sit amet maximus orci, vel sodales dui. Etiam bibendum velit vel interdum egestas. Pellentesque vel eros sed turpis porta porta id sed lacus. Praesent commodo sem nisl, eget congue felis fermentum vel. Donec sodales lectus sed gravida vulputate. Proin fermentum turpis vel sodales mollis. Duis ac erat eu risus sodales placerat ac vitae quam. Fusce non leo fringilla, malesuada lorem ac, feugiat dolor.

Quisque eleifend egestas ex, at vehicula risus tempus vel. Maecenas bibendum maximus sem non tempus. Ut rhoncus neque a dapibus consectetur. Sed ornare dignissim orci in vestibulum. Donec eget odio sed nisi faucibus sagittis. Quisque accumsan, elit id ultricies facilisis, leo justo accumsan diam, a mattis massa lacus nec massa. Aliquam mattis tellus tristique augue sodales egestas quis quis elit. Nam eu venenatis metus, vel lacinia purus.
                        </textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <PostDivLink />
                    <PostDivLink />
                    <PostDivLink />
                    <PostDivLink />
                    <PostDivLink />

                </div>
            </div>
        </div>
    )
}

export default Topic

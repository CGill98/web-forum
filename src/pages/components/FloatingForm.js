import React, {useState} from 'react'
import formstyle from './FloatingForm.module.css'

const FloatingForm = () => {

    const [maximised, setMaximised] = useState(false)

    const toggleSize = () => {
        setMaximised(!maximised)
    }


    return (
    <div className={maximised ? formstyle.formdiv : formstyle.formdivminimised}>   
        <div className={formstyle.header}>
            <h2>Make a Comment</h2>
            <span className={formstyle.minmaxbtn} onClick={toggleSize}>{maximised ? 'Minimise' : 'Maximise'}</span>
        </div>
        <form className={formstyle.newpostform}>
            <label>Post Title</label>
            <input type="text" name="title" value='Kants critique of pure..'/>
            <label>Reply To</label>
            <input type="text" name="replyto" value='user 1'/> 
            <ul className={formstyle.replylist}>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>

            </ul>
            <label>Description</label>
            <textarea className={formstyle.textarea}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas nunc quis ornare. Etiam id sollicitudin risus. Ut sit amet ligula libero. Integer ultrices mauris vel efficitur eleifend. Nunc rhoncus ligula vel scelerisque molestie. Vestibulum vel nunc mattis mauris tristique ornare sit amet tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus finibus egestas. Etiam eu lorem sed lacus dapibus luctus nec et lorem. Etiam a massa purus. Mauris rutrum quam eu lectus porttitor, vitae consectetur diam pretium.

Nunc mollis elit et ipsum porta gravida. Curabitur elementum vehicula diam eu porta. Vestibulum tempor ex ultricies, bibendum libero quis, commodo felis. In hendrerit pharetra lobortis. Etiam eget quam vel neque malesuada mattis at non nisi. Nunc sit amet maximus orci, vel sodales dui. Etiam bibendum velit vel interdum egestas. Pellentesque vel eros sed turpis porta porta id sed lacus. Praesent commodo sem nisl, eget congue felis fermentum vel. Donec sodales lectus sed gravida vulputate. Proin fermentum turpis vel sodales mollis. Duis ac erat eu risus sodales placerat ac vitae quam. Fusce non leo fringilla, malesuada lorem ac, feugiat dolor.

Quisque eleifend egestas ex, at vehicula risus tempus vel. Maecenas bibendum maximus sem non tempus. Ut rhoncus neque a dapibus consectetur. Sed ornare dignissim orci in vestibulum. Donec eget odio sed nisi faucibus sagittis. Quisque accumsan, elit id ultricies facilisis, leo justo accumsan diam, a mattis massa lacus nec massa. Aliquam mattis tellus tristique augue sodales egestas quis quis elit. Nam eu venenatis metus, vel lacinia purus.
            </textarea>
            <input type="submit" value="Submit" className={formstyle.submitbtn}/>
        </form>
    </div>
    )
}

export default FloatingForm

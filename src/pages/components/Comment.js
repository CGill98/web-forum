import React, {useState} from 'react'
import {useSetImageSize} from '../../modules/useSetImageSize'

import poststyles from '../PostStyles.module.css'


const Comment = () => {
    const [image, setImage] = useState({
        width: 0,//file
        height: 0,
        ratio: 1,//width/height
        webWidth: 100,//inbrowser
        webHeight: 100, 
    })

    useSetImageSize(image, setImage, 'https://i.pinimg.com/originals/a3/b7/a9/a3b7a9ad0a865fd25ec8b55aa8ff62fa.jpg')

    return (
        <div className={poststyles.comment}>
            <h3>Comment by Homer Simpson</h3>
            <div className={poststyles.commentcontent}>
                <img src={'https://i.pinimg.com/originals/a3/b7/a9/a3b7a9ad0a865fd25ec8b55aa8ff62fa.jpg'} 
                width={image.webWidth} height={image.webHeight}></img>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum aliquam sodales. Suspendisse mattis metus sit amet orci elementum...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum aliquam sodales. Suspendisse mattis metus sit amet orci elementum...
                
                </div>
            </div>
            <div>
                <div className={poststyles.replybtn}>Make Reply</div>

                <ul>
                    <span><b>Replies</b></span>
                    <li>user 1</li>
                    <li>user 1</li>
                    <li>user 1</li>
                    <li>user 1</li>

                </ul>
            </div>
        </div>
    )
}

export default Comment

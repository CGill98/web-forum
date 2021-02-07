import React, {useState, useEffect} from 'react'
import comment from '../../api/comment'
import {useSetImageSize} from '../../modules/useSetImageSize'

import poststyles from '../PostStyles.module.css'


const Comment = ({commentData}) => {
    const [image, setImage] = useState({
        width: 0,//file
        height: 0,
        ratio: 1,//width/height
        webWidth: 100,//inbrowser
        webHeight: 100, 
    })

    const [imgLink, setImgLink] = useState(commentData.image !== undefined ? `http://127.0.0.1:4000/api/image/${commentData.image}` : '')

    //useSetImageSize(image, setImage, 'https://i.pinimg.com/originals/a3/b7/a9/a3b7a9ad0a865fd25ec8b55aa8ff62fa.jpg')
    useEffect(()=>{
        if (imgLink) {
            var imageHelper = new Image();
    
            imageHelper.onload = function(){
                setImage({...imageHelper, webWidth: imageHelper.width * (250 / imageHelper.height), webHeight: 250})
            }

        
            imageHelper.src = imgLink;


        }
    }, [])

    return (
        <div className={poststyles.comment}>
            <h3>Comment by {commentData.username}</h3>
            <p className={poststyles.commentcontent}>
                {imgLink && <img src={imgLink} width={image.webWidth} height={image.webHeight}></img>}
                {commentData.text}                
            </p>
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

import React, {useState, useEffect} from 'react'
import comment from '../../api/comment'
import {useSetImageSize} from '../../modules/useSetImageSize'
import {useDispatch} from 'react-redux'

import poststyles from '../PostStyles.module.css'


const Comment = ({commentData}) => {
    const [image, setImage] = useState({
        width: 0,//file
        height: 0,
        ratio: 1,//width/height
        webWidth: 100,//inbrowser
        webHeight: 100, 
    })

    const [video, setVideo] = useState(null);
    const globalDispatch = useDispatch()

    const [imgLink, setImgLink] = useState(commentData.image !== undefined ? `http://127.0.0.1:4000/api/image/${commentData.image}` : '')
    const [vidLink, setVidLink] = useState(commentData.video !== undefined ? `http://127.0.0.1:4000/api/image/${commentData.image}` : '')

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
            <h3>{commentData.username} - Comment No. {commentData._id}</h3>
            {commentData.replyTo &&
            <ul>            
                <span><b>Replying To</b></span>
                {commentData.replyTo.map(r => <li>{`${r.slice(0, 6)}...`}</li>)}
            </ul>}
            {commentData.replyFrom &&
            <ul>
                <span><b>Replies From</b></span>
                {commentData.replyFrom.map(r => <li>{`${r.slice(0, 6)}...`}</li>)}

            </ul>}
            <p className={poststyles.commentcontent}>
                {imgLink && <img src={imgLink} 
                                 width={image.webWidth} 
                                 height={image.webHeight}></img>}
                {vidLink && <img src={vidLink} 
                                 width={video.webWidth} 
                                 height={video.webHeight}></img>}   
                {commentData.text}                
            </p>
            <div>
                <div className={poststyles.replybtn} onClick={() => globalDispatch({type: "push_reply", payload: {id: commentData._id}})}>Make Reply</div>
            </div>
        </div>
    )
}

export default Comment

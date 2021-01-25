import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSetImageSize} from '../../modules/useSetImageSize'
import homestyles from '../HomeStyles.module.css'
import './PostDivLink.css'
require('dotenv').config()

//CONVERT THIS TO A POST 'ADVERTISEMENT'
const PostDivLink = ({ trending, postData }) => {
    
    const [image, setImage] = useState({
        width: 0,//file
        height: 0,
        ratio: 1,//width/height
        webWidth: 200,//inbrowser
        webHeight: 300, 
    })
    console.log(postData)

    const img = postData !== undefined ? `http://127.0.0.1:4000/api/image/${postData.image}` : ''
    const postId = postData !== undefined ? postData._id : ''
    
    const [imgLink, setImgLink] = useState(img)
    useEffect(()=>{
        if (img) {
            var imageHelper = new Image();
    
            imageHelper.onload = function(){
                setImage({...imageHelper, webWidth: imageHelper.width * (250 / imageHelper.height), webHeight: 250})
            }

        
            imageHelper.src = img;

            document.getElementById(postId).width = 250 < image.webWidth ? image.webHeight + 50 : 300 

        }
    }, [])


    return (
    <div className={homestyles.trendingpost} id={postId}>
        <Link to={`/philosophy/post/${postId}`}>
            <h2>{postData.title}</h2> 
            {trending && <h3>On Philosophy</h3>}
            <div className={homestyles.trendingpostcontent}>
                {imgLink && <img src={imgLink} width={image.webWidth} height={image.webHeight} className={homestyles.trendingpostimg}></img>}
                <div>
                    {postData.text}
                </div>
            </div>
        </Link>
    </div>
    )
}

export default PostDivLink

import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSetImageSize} from '../../modules/useSetImageSize'
import homestyles from '../HomeStyles.module.css'
import './PostDivLink.css'

//CONVERT THIS TO A POST 'ADVERTISEMENT'
const PostDivLink = ({ trending, imgLink, id, postData }) => {
    
    const [image, setImage] = useState({
        width: 0,//file
        height: 0,
        ratio: 1,//width/height
        webWidth: 100,//inbrowser
        webHeight: 100, 
    })

    //useSetImageSize(image, setImage, imgLink)
    

    //useSetImageSize(imgLink, Loaded)
    
    console.log(postData)
    if (postData) {
        imgLink = `http:127.0.0.1:4000/uploads/${postData.image}`
        console.log(imgLink)
        //setImage({...image, webWidth: 100, webHeight: 100})

    }
    


    useEffect(()=>{



        if (document.getElementById(id)) {
            const titleWidth = 300
            const imgWidth = image.webWidth
            document.getElementById(id).style.width = `${titleWidth < imgWidth ? imgWidth + 40 : titleWidth + 40}px`
            console.log(document.getElementById(id).childNodes[0].childNodes[1].childNodes[0])
            document.getElementById(id).childNodes[0].childNodes[1].childNodes[0].src = imgLink
        }
    }, [])


    return (
    <div className={homestyles.trendingpost} id={id}>
        <Link to='/philosophy/1'>
            <h2>The Problem of Induction</h2> 
            {trending && <h3>On Philosophy</h3>}
            <div className={homestyles.trendingpostcontent}>
                {imgLink && <img src={imgLink} width={image.webWidth} height={image.webHeight} className={homestyles.trendingpostimg}></img>}
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum aliquam sodales. Suspendisse mattis metus sit amet orci elementum...
                </div>
            </div>
        </Link>
    </div>
    )
}

export default PostDivLink

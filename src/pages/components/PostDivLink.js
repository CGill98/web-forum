import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import homestyles from '../HomeStyles.module.css'
var sizeOf = require('image-size');
const fs = require('fs');

//CONVERT THIS TO A POST 'ADVERTISEMENT'
const PostDivLink = ({ trending, imgLink }) => {
    console.log(imgLink)
    const [image, setImage] = useState({
        width: 0,//file
        height: 0,
        ratio: 1,//width/height
        webWidth: 0,//inbrowser
        webHeight: 0, 
    })

    const [loaded, setLoaded] = useState(false)
    if (imgLink && !loaded) {

        var request = new XMLHttpRequest();
        request.open('GET', imgLink, true);
        request.responseType = 'blob';
        request.onload = function() {
            var reader = new FileReader();
            reader.readAsDataURL(request.response);
            reader.onload =  function(e){

                const img = new Image();
                img.onload = function() {
                    setImage({...image, 
                        width: this.width,
                        height: this.height,
                        ratio: this.width/this.height,
                        webWidth: 250 * this.width / this.height,
                        webHeight: 250,

                    })

                    setLoaded(true)
                }
                img.src = e.target.result;
                
            };
        };
        request.send();
    }

    console.log(image)


    return (
    <div className={homestyles.trendingpost}>
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

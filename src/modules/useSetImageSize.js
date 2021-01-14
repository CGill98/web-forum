import React, { useState } from "react";

export const useSetImageSize = (image, setImage, imgLink) => {
    const [loaded, setLoaded] = useState(false)

    if (imgLink && !loaded) {
        var request = new XMLHttpRequest();
        request.open('GET', imgLink, true);
        //console.log("request opened")

        request.responseType = 'blob';
        request.onload = function() {
            //console.log("request onload")

            var reader = new FileReader();
            reader.readAsDataURL(request.response);
            reader.onload =  function(e){
            //console.log("reader onload")

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
                //console.log(image)
                img.src = e.target.result;
                
            };
        };
        request.send();
    }   
}
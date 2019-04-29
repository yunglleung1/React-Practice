import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {//destructuring props
  if(box){
    return(
      <div className = 'container'>
        <div className = 'image_box'>
          <img id = 'image' src = {imageUrl} alt = ''/>
          <div
            className = 'bounding_box'
            style = {{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}>
          </div>
        </div>
      </div>
    );
  } else{
    return(
      <div className = 'imageContainer'>
        <img id = 'image' src = {imageUrl} alt = ''/>
      </div>
    );

  }
}

export default FaceRecognition;

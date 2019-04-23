import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {//destructuring
  // this does not work: {onInputChange} = props;
  return(
    <div>
      <p> {'Please enter an image link: '}</p>
      <div className = 'center'>
        <div className = 'form'>
          <input type='text' name='url' onChange = {onInputChange}/>
          <button onClick = {onButtonSubmit}>DETECT</button>
        </div>
      </div>

    </div>
  )
}

export default ImageLinkForm;

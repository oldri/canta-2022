import React, { useState } from 'react'
import '../App.css'

export default function Card({ index, image }) {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  const showImage = (e) => {
    setImageToShow(e.target.src);
    setLightboxDisplay(true);
  }

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  return (
   <React.Fragment>
    <img key={index} src={image} alt={image.alt} className='card' onClick={(e) => showImage(e)}/> 
    {lightboxDisplay ? 
      <div id="lightbox" onClick={hideLightbox}>
        <img id='lightbox-img' key={index} src={imageToShow} alt={image.alt} className='card'/> 
      </div>
      : ''
    }
   </React.Fragment>
  )
}

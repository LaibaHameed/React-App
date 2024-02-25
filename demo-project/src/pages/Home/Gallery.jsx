import React from 'react'
import "./Gallery.css"
import image1 from "../../assets/menu-imgs/home-1-gallery-1.jpg";
import image2 from "../../assets/menu-imgs/home-1-gallery-2-550x550.jpg";
import image3 from "../../assets/menu-imgs/home-1-gallery-3-550x550.jpg";
import image4 from "../../assets/menu-imgs/home-1-gallery-4-500x1000.jpg";
import image5 from "../../assets/menu-imgs/home-1-gallery-5-550x550.jpg";
import image6 from "../../assets/menu-imgs/home-1-gallery-6-550x550.jpg";

const Gallery = () => {
  return (
    <div className='gallery'>
        <div class="grid-container">
        <img src={image1} alt=""  class="img-1"/>
        <img src={image2} alt="" class="img-2"/>
        <img src={image3} alt="" class="img-3"/>
        <img src={image4} alt="" class="img-6"/>
        <img src={image5} alt="" class="img-5"/>
        <img src={image6} alt="" class="img-4"/>
    </div>
    </div>
  )
}

export default Gallery
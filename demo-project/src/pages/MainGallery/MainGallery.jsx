import React from 'react'
import './MainGallery.css'
import { Link } from 'react-router-dom'

import image1 from "../../assets/gallery/h6-featured-1.jpg";
import image2 from "../../assets/gallery/h6-featured-2.jpg";
import image3 from "../../assets/gallery/h6-featured-3.jpg";
import image4 from "../../assets/gallery/h6-featured-4.jpg";
import image5 from "../../assets/gallery/h6-featured-5.jpg";
import image6 from "../../assets/gallery/h6-featured-6.jpg";
import image7 from "../../assets/gallery/h6-featured-7.jpg";
import image8 from "../../assets/gallery/h6-featured-8.jpg";
import image9 from "../../assets/gallery/h6-featured-9.jpg";

const MainGallery = () => {
  const galleryItems = [
    {
      src: image1,
      alt: "person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer",
      caption: "TRADITIONAL COFFEE"
    },
    {
      src: image2,
      alt: "sunset behind San Francisco city skyline",
      caption: "INTERIOR IDEAS"
    },
    {
      src: image3,
      alt: "people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan",
      caption: "MORNING HABITS"
    },
    {
      src: image4,
      alt: "car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night",
      caption: "COFFEE DECORATIONS"
    },
    {
      src: image5,
      alt: "back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA",
      caption: "YOUR FAVORITE PLACE"
    },
    {
      src: image6,
      alt: "man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp",
      caption: "EVERYDAY BEAUTY"
    },
    {
      src: image7,
      alt: "man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp",
      caption: "MORNING COFFEE"
    },
    {
      src: image8,
      alt: "man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp",
      caption: "SWEET IDEAS"
    },
    {
      src: image9,
      alt: "man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp",
      caption: "EVERYDAY INSPIRATION"
    }
  ];
  return (
    <>
      <div class="g-heading">
        <h3>Gallery</h3>
        <p><Link to="/home" >Coffee</Link> / <a href="#">Pages</a> / <Link to="/gallery" >Gallery</Link></p>
      </div>

      <div class="container">

        <div class="gallery">

          {galleryItems.map((item, index)=>(
            <div class="gallery-item" key={index}>
            <figure>
              <img class="gallery-image" src={item.src} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default MainGallery
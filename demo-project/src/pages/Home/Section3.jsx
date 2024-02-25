import React from 'react'
import "./Section3.css"
import image1 from "../../assets/imgs/home-1-s-slider-1.jpg";
import image2 from "../../assets/imgs/main-home-project-pres-3.jpg";

const Section3 = () => {
  return (
    <div className="display">
        
 <div className="main-box">
     <div className="box1">
         <img src={image1} alt='image'/>
         <h1>TRY THE BEST COFFEE IN THE CITY</h1>
         <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an at dictum lacu pericula uni euripidis.</p>
         <button>Read more <span>→</span></button>
     </div>
     <div className="box2">
         <img src={image2} alt=""/>
     </div>
 </div>

    </div>
  )
}

export default Section3
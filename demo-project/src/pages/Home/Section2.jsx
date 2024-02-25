import React from 'react'
import "./Section2.css"
import image1 from "../../assets/imgs/home-1-icon-img-1.png"
import image2 from "../../assets/imgs/home-1-icon-img-2.png"
import image3 from "../../assets/imgs/home-1-icon-img-3.png"
import image4 from "../../assets/imgs/home-1-icon-img-4.png"

const Section2 = () => {
    return (
        <div className='container'>
            <div className="card-box">

                <div className="card-item">
                    <img className="gallery-image" src={image1} />
                    <h2>COFFEEMAKER</h2>
                    <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                </div>

                <div className="card-item">
                    <img className="gallery-image" src={image2} />
                    <h2>COFFEE GRINDER</h2>
                    <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                </div>

                <div className="card-item">
                    <img className="gallery-image" src={image3} />
                    <h2>COFFEE CUPS</h2>
                    <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                </div>

                <div className="card-item">
                    <img className="gallery-image" src={image4} />
                    <h2>ESPRESSO MACHINE</h2>
                    <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                </div>

            </div>
        </div>
    )
}

export default Section2
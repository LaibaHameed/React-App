import React from 'react'
import './AboutUs.css'
import img from "../../assets/image/About-img-1.png"

const AboutUs = () => {
  return (
    <>
      <div class="section">
    <div class="container">
        <div class="content-section">
            <div>
                <h1 class="title">About me</h1>
            </div>
            <div class="a-content">
                <h3>FEDERICO HICKMAN</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
            <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quavenenatis estibacenas sed diam eget

            </p>
                <div class="btn">
                    <a href="">Read More</a>
                </div>
            </div>
            <div class="social">
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="image-section">
            <img src={img}/>
        </div>
    </div>
</div>
    </>
  )
}

export default AboutUs
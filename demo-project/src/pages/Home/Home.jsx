import React from 'react'
import './Home.css'
import coffeeImage from '../../assets/imgs/home-img-1.png';
import coffeeImage1 from '../../assets/imgs/home-img-1.png';
import coffeeImage2 from '../../assets/imgs/home-img-2.png';
import coffeeImage3 from '../../assets/imgs/home-img-3.png';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Gallery from './Gallery';

const Home = () => {
    return (

        <>
            <div className="home" id="home">

                <div className="row">

                    <div className="content">
                        <h3 className="freshCoffee">
                        {/* Every Sip is a Step to Bliss */}
                        Fresh Coffee for You
                        {/* Your Perfect Coffee, Brewed with Care */}
                        {/* Sip,Savor, Energize Your Day */}
                        </h3>
                        <p>Your Coffee Deserves the Best, and We're Here to Pour It for You.
                        Your Morning Deserves the Best, and We're Here to Brew It for You.</p>
                        <div className='btn-btn'>
                        <a routerLink="/menu" className="btn"> book Table</a>
                        <a routerLink="/menu" className=" btn-line"> Buy Now</a>
                        </div>
                    </div>

                    <div className="image">
                        {/* <img src="../../assets/imgs/home-img-1.png"  alt="" /> */}
                        <img className="main-img" src={coffeeImage3} alt="Coffee" />
                        
                    </div>

                </div>

                {/* <div className="img-slider">
                    <img   src={coffeeImage2} alt="" />
                    <img src={coffeeImage3} alt="" />
                    <img className='img-slide1' src={coffeeImage1} alt="" />
                </div> */}

            </div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Gallery/>
        </>
    )
}

export default Home
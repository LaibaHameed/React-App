import React from 'react'
import './Home.css'
import coffeeImage from '../../assets/imgs/home-img-1.png';
import coffeeImage1 from '../../assets/imgs/home-img-1.png';
import coffeeImage2 from '../../assets/imgs/home-img-2.png';
import coffeeImage3 from '../../assets/imgs/home-img-3.png';

const Home = () => {
    return (

        <>
            <div className="home" id="home">

                <div className="row">

                    <div className="content">
                        <h3 className="freshCoffee">fresh coffee in Morning</h3>
                        <a routerLink="/menu" className="btn"> Buy one Now</a>
                    </div>

                    <div className="image">
                        {/* <img src="../../assets/imgs/home-img-1.png"  alt="" /> */}
                        <img className="main-img" src={coffeeImage} alt="Coffee" />
                    </div>

                </div>

                <div className="img-slider">
                    <img src={coffeeImage1} alt="" />
                    <img src={coffeeImage2} alt="" />
                    <img src={coffeeImage3} alt="" />
                </div>

            </div>

        </>
    )
}

export default Home
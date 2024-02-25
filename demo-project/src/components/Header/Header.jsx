import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {

    
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

const togglePages = () => {
  setIsPagesOpen(!isPagesOpen);
  setIsShopOpen(false);
};

const handleClick = (event) => {
  event.preventDefault(); // Prevent the default behavior of the Link tag
  togglePages(); // Call your togglePages function
};

const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
    setIsPagesOpen(false);
};

const handleClick2 = (event) => {
  event.preventDefault(); // Prevent the default behavior of the Link tag
  toggleShop(); // Call your togglePages function
};


const toggleMenu = () => {
  setIsClick(!isClick);
};


const navbarRef = useRef(null);

useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsPagesOpen(false);
        setIsShopOpen(false);
      }
    };

    const handleScroll = () => {
      setIsPagesOpen(false);
      setIsShopOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  return (
    <>
<header className="header">

<a routerLink="/home" className="logo"> coffee <i className="fas fa-mug-hot"></i> </a>

<nav ref={navbarRef}  className={`${ isClick ? "active navbar" : "navbar"}`}>
    <ul>
        <li><a><Link to={'/'}>home</Link></a></li>
        <li><a><Link to={'/menu'}>Menu</Link></a></li>
        <li><a><Link to={'reservation'}>Reservation</Link></a></li>
        <li>
            <a onClick={togglePages}>
            <Link onClick={handleClick}>pages <i className={"fa-solid fa-caret-down"}></i></Link>
            </a>
            <ul style={{ display: isPagesOpen ? 'block' : 'none' }}>
                <li><a><Link to={'main-gallery'}>Gallery</Link></a></li>
                <li><a><Link to={'about-us'}>About Us</Link></a></li>
                <li><a><Link to={'contact-us'}>contact Us</Link></a></li>
            </ul>
        </li>
        <li><a onClick={toggleShop} ><Link onClick={handleClick2}>Shop <i className="fa-solid fa-caret-down"></i></Link> </a>
            <ul style={{ display: isShopOpen ? 'block' : 'none' }}>
                <li><a><Link to={'products'}>Products</Link></a></li>
                <li><a><Link to={'cart'}>Cart</Link></a></li>
                <li><a><Link to={'check-out'}>Check Out</Link></a></li>
                <li><a><Link to={'account'}>My Account</Link></a></li>

            </ul>
        </li>
    </ul>
</nav>

<div className="icons">
    <div  id="menu-btn" onClick={toggleMenu}><i  className={`${ isClick ? "fa-solid fa-xmark" : "fas fa-bars" }`}></i></div>
    <Link to={'cart'}><a  className="fas fa-shopping-cart"></a></Link>
    <Link><a className="btn">Join Us</a></Link>
</div>

</header>
    </>
  )
}

export default Header
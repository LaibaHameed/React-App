import React, { useEffect, useRef, useState } from 'react'
import './Header.css'

const Header = () => {

    
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isClick, setIsClick] = useState(true);

const togglePages = () => {
  setIsPagesOpen(!isPagesOpen);
  setIsShopOpen(false);
};

const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
    setIsPagesOpen(false);
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
        <li><a routerLink="/home">home</a></li>
        <li><a routerLink="/menu">Menu</a></li>
        <li><a routerLink="/reservation">Reservation</a></li>
        <li>
            <a href="#" onClick={togglePages}>
            pages <i className={"fa-solid fa-caret-down"}></i>
            </a>
            <ul style={{ display: isPagesOpen ? 'block' : 'none' }}>
                <li><a routerLink="/gallery">Gallery</a></li>
                <li><a routerLink="/about-us">About Us</a></li>
                <li><a routerLink="/contact-us">Contact Us</a></li>
            </ul>
        </li>
        <li><a href="#"  onClick={toggleShop} >Shop <i className="fa-solid fa-caret-down"></i> </a>
            <ul style={{ display: isShopOpen ? 'block' : 'none' }}>
                <li><a routerLink="/products">Products</a></li>
                <li><a routerLink="/cart">Cart</a></li>
                <li><a routerLink="/check-out">Check Out</a></li>
                <li><a routerLink="/">My Account</a></li>

            </ul>
        </li>
    </ul>
</nav>

<div className="icons">
    <div  id="menu-btn" onClick={toggleMenu}><i  className={`${ isClick ? "fa-solid fa-xmark" : "fas fa-bars" }`}></i></div>
    <a routerLink="/cart" className="fas fa-shopping-cart"></a>
    <a routerLink="/sign-up" className="btn">Join Us</a>
</div>

</header>
    </>
  )
}

export default Header
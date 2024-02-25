import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="row">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                <li><a><Link to={'about-us'}>About Us</Link></a></li>
                <li><a><Link to={'contact-us'}>contact Us</Link></a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                </ul>
            </div>
            
            <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">coffee</a></li>
                    <li><a href="#">cups</a></li>
                    <li><a href="#">groundCoffe</a></li>
                    <li><a href="#">cookies</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>s
</footer>
  )
}

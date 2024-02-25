import React from 'react'
import { Link } from 'react-router-dom'
import './CheckOut.css'

const CheckOut = () => {
  return (
    <>
      <div class="heading">
        <h3>Check Out</h3>
        <p><Link to={"/"} >Coffee</Link> / <Link to={"/check-out"} >CheckOut</Link></p>
      </div>
      <div class="checkout">
        <p>Checkout is not available whilst your cart is empty.</p>
      </div>
      <div class="empty">
        <p>Your cart is currently empty.</p>
      </div>
      <div class="return">
        <a routerLink="/products" >Return to Shop</a>
      </div>
    </>
  )
}

export default CheckOut
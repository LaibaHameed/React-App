import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

import item1 from "../../assets/Products/product-image-1.jpg";;
import item2 from "../../assets/Products/product-image-7.jpg";
import item3 from "../../assets/Products/product-image-3.jpg";


const Cart = () => {
  return (
    <>
      <div class="cart-heading">
        <h3>Cart</h3>
        <p><Link to={"/"} >Coffee</Link> / <Link to={"/cart"} >Cart</Link></p>
      </div>

      {/* <div class="empty">
    <p>Your cart is currently empty.</p>
</div>

<div class="return">
<Link to={"/products"} >Return to Shop</Link>
</div> */}

      {/* **************** */}

      <div class="cart-parent">
        <table cellpadding="0" cellspacing="0" >
          <thead>
            <tr>
              <th class="cart">CART</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="image"><img src={item1} alt="" class="image" /></td>
              <td class="itemName">Paper Bag</td>
              <td>$35.00</td>
              <td>
                <input type="number" min="1" value="1" class="inputNo" />
              </td>
              <td>$35.00</td>
              <td>x</td>
            </tr>
            <tr>
              <td class="image"><img src={item2} alt="" class="image" /></td>
              <td class="itemName">Paper cup</td>
              <td>$15.00</td>
              <td>
                <input type="number" min="1" value="1" class="inputNo" />
              </td>
              <td>$15.00</td>
              <td>x</td>
            </tr>
            <tr>
              <td class="image"><img src={item3} alt="" class="image" /></td>
              <td class="itemName">Plastic pouch</td>
              <td>$65.00</td>
              <td>
                <input type="number" min="1" value="1" class="inputNo" />
              </td>
              <td>$65.00</td>
              <td>x</td>
            </tr>
          </tbody>
        </table>
      </div>



      <div class="coupon">
        <form action="#" className='cart-form'>
          <div>
            <input type="text" name="" id="" value="Coupon Code" class="input" />
            <input type="button" value="AppLy Coupon" class=" form-Btn" />
          </div>
          <input type="button" value="Update Cart" class=" form-Btn"></input>
        </form>
      </div>

      <h3 class="cartHeading">CART TOTAL</h3>
      <div class="cartTotal">
        <form action="#" class="totalCartForm">
          <div class="child-1">
            <label for="">SubTotal:</label>
            <input type="text" name="" id="" value="$115" class="dyn-input" readonly />
          </div>
          <div class="child-2">
            <label for="">Shipping:</label>
            <input type="text" name="" id="" value="Free Shipping" class="dyn-input" readonly />
          </div>
          <div class="child-3">
            <label for="">Total:</label>
            <input type="text" name="" id="" value="$115" class="dyn-input" readonly />
          </div>
        </form>
      </div>

      <div class="calculate">
        <div class="links">
          <a href="#" class="calShip">CALCULATE SHIPPING</a>
          <button class="btn">Proceed to checkout</button>
        </div>
      </div>

    </>
  )
}

export default Cart
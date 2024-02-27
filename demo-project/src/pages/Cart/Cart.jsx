import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { useLocation } from 'react-router-dom';


const Cart = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('productId');
  const quantity = searchParams.get('quantity');
  const price = searchParams.get('price');
  const name = searchParams.get('name');
  const image = searchParams.get('img');

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('productId');
    const quantity = searchParams.get('quantity');
    const price = searchParams.get('price');
    const Pname = searchParams.get('name');
    const image = searchParams.get('img');

    // Create a new item object
    const newItem = {
      productId: productId,
      Pname: Pname,
      price: parseFloat(price),
      image: image,
      quantity: parseInt(quantity),
    };

  

    // Update cartItems state by adding the new item
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
  }, [location.search]); 


  const [count, setCount] = useState(quantity);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };


  return (
    <>
      <div class="cart-heading">
        <h3>Cart</h3>
        <p><Link to={"/"} >Coffee</Link> / <Link to={"/cart"} >Cart</Link></p>
      </div>

      {cartItems.length === 0 ? (
        <>
          <div class="empty">
            <p>Your cart is currently empty.</p>
          </div>

          <div class="return">
            <Link to={"/products"} >Return to Shop</Link>
          </div>
        </>
      ) : (
        <>
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
                <tr key={productId}>
                  <td class="image"><img src={image} alt="" class="image" /></td>
                  <td class="itemName">{name}</td>
                  <td>${price}</td>
                  <td>
                    <i className="fa-solid fa-minus" onClick={decrement}></i>
                    <span className='cart-span'>{count}</span>
                    <i className="fa-solid fa-plus" onClick={increment}></i>
                  </td>
                  <td>${price * count}</td>
                  <td onClick={() => handleRemoveItem(item.productId)}>x</td>
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
              <Link to={'/products'}> <input type="button" value="Update Cart" class=" form-Btn"></input></Link>
            </form>
          </div>

          <h3 class="cartHeading">CART TOTAL</h3>
          <div class="cartTotal">
            <form action="#" class="totalCartForm">
              <div class="child-1">
                <label for="">SubTotal:</label>
                <input type="text" name="" id="" value={`$ ${price * count}`} class="dyn-input" readonly />
              </div>
              <div class="child-2">
                <label for="">Shipping:</label>
                <input type="text" name="" id="" value="Free Shipping" class="dyn-input" readonly />
              </div>
              <div class="child-3">
                <label for="">Total:</label>
                <input type="text" name="" id="" value={`$ ${price * count}`} class="dyn-input" readonly />
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
      )}



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
            <tr key={productId}>
              <td class="image"><img src={image} alt="" class="image" /></td>
              <td class="itemName">{name}</td>
              <td>${price}</td>
              <td>
                <i className="fa-solid fa-minus" onClick={decrement}></i>
                <span className='cart-span'>{count}</span>
                <i className="fa-solid fa-plus" onClick={increment}></i>
              </td>
              <td>${price * count}</td>
              <td onClick={() => handleRemoveItem(item.productId)}>x</td>
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
          <Link to={'/products'}> <input type="button" value="Update Cart" class=" form-Btn"></input></Link>
        </form>
      </div>

      <h3 class="cartHeading">CART TOTAL</h3>
      <div class="cartTotal">
        <form action="#" class="totalCartForm">
          <div class="child-1">
            <label for="">SubTotal:</label>
            <input type="text" name="" id="" value={`$ ${price * count}`} class="dyn-input" readonly />
          </div>
          <div class="child-2">
            <label for="">Shipping:</label>
            <input type="text" name="" id="" value="Free Shipping" class="dyn-input" readonly />
          </div>
          <div class="child-3">
            <label for="">Total:</label>
            <input type="text" name="" id="" value={`$ ${price * count}`} class="dyn-input" readonly />
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
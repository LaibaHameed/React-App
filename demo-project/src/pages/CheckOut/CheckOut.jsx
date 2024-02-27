import React from 'react'
import { Link } from 'react-router-dom'
import './CheckOut.css'
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    // const { productId } = useParams();

  return (
    <>
      <div className="check-heading">
        <h3>Check Out</h3>
        <p><Link to={"/"} >Coffee</Link> / <Link to={"/check-out"} >CheckOut</Link></p>
      </div>
      {/* <div className="checkout">
        <p>Checkout is not available whilst your cart is empty.</p>
      </div>
      <div className="empty">
        <p>Your cart is currently empty.</p>
      </div>
      <div className="return">
        <a routerLink="/products" >Return to Shop</a>
      </div> */}

      <div className="checkout">
        <p>Returning customer? <a className="clicks" href="./login.html">Click here to login</a> </p>
    </div>

    <div className="empty">
        <p>Have a coupon? <a className="clicks" href="./cart2.html"> Click here to enter your code</a></p>
    </div>

    <form action="#" className='c-form'>
        <div class="parent-c">
            <div class="child1">
                <h1>BILLING & SHIPPING</h1>
                <div class="nestedChild">
                    <input type="text" name="" id="" placeholder="First name"/>
                    <input type="text" name="" id="" placeholder="Last name"/>
                    
                </div>
                <input type="text" name="" id="" placeholder="Company name"/>
                <select name="" id="">
                    <option value="">Pakistan</option>
                    <option value="">India</option>
                    <option value="">BanglaDash</option>
                    <option value="">Srilanka</option>
                </select>
                <input type="text" name="" id="" placeholder="House number and street name"/>
                <input type="text" name="" id="" placeholder="Apartment, suite, unit, etc. (optional)"/>
                <input type="text" name="" id="" placeholder="City"/>
                <select name="" id="">
                    <option value="">State/Country</option>
                    <option value="">Punjab</option>
                    <option value="">Sindh</option>
                    <option value="">Bolchistan</option>
                    <option value="">KhyberPakhtunKhawa</option>
                </select>
                <input type="text" name="" id="" placeholder="Postcode / ZIP"/>
                <input type="text" name="" id="" placeholder="Phone"/>
                <input type="text" name="" id="" placeholder="Email"/>

            </div>
            <div class="child2">
                <h1>ADDITIONAL INFORMATION</h1>
                <input type="text" name="" id="" placeholder="Notes about your order, e.g. special notes for delivery."/>
            </div>
        </div>

        <h1 class="yourOrder">YOUR ORDER</h1>
        <div class="table">
            <table>
                <thead>
                    <th>Product</th>
                    <th>SubTotal</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Paper Bag   x <span>1</span></td>
                        <td>$35.00</td>
                    </tr>
                    <tr>
                        <td>Paper Cup   x <span>1</span></td>
                        <td>$15.00</td>
                    </tr>
                    <tr>
                        <td>Plastic Pouch   x <span>1</span></td>
                        <td>$15.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>SubTotal</th>
                        <td >$115.00</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td><small>Free Shipping</small></td>
                    </tr >
                    <tr>
                        <th>Total</th>
                        <td>$115.00</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div className='btnBox'><input type="button" value="Place Order" class="btn formBtn"/></div>
    </form>





    </>
  )
}

export default CheckOut
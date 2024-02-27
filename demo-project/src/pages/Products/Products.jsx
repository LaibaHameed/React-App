import React from 'react'
import './Products.css';
import { Link } from 'react-router-dom';
import headImg from "../../assets/Products/P-main-img.jpg";

import productsData from '../../Data/ProductData';


const Products = () => {
//  console.log(productsData)

  return (
    <>
      <section class="head-img">
        <img class="header-img" src={headImg} alt="" srcset="" />
      </section>

      <section className="section-prices">
        <div className="list-boxs">
           {productsData.map((prod, index) => (
            <div className="p-card starter" key={index} >
              <div className="p-head">
                {prod.Name}
              </div>
              <div className="ticket">${prod.Price}.00</div>
              <div className="p-body">
                <img src={prod.image} alt="" />
                <Link to={`/product-display/${prod._id}`}><button className="p-btn">View Details</button></Link>
              </div>
            </div>
           ))}
        </div>
      </section>
    </>
  )
}

export default Products
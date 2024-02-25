import React from 'react'
import './Products.css';
import headImg from "../../assets/Products/P-main-img.jpg";

import image1 from "../../assets/Products/product-image-1.jpg";
import image2 from "../../assets/Products/product-image-2.jpg";
import image3 from "../../assets/Products/product-image-3.jpg";
import image4 from "../../assets/Products/product-image-4.jpg";

import image5 from "../../assets/Products/product-image-5.jpg"
import image6 from "../../assets/Products/product-image-6.jpg";
import image7 from "../../assets/Products/product-image-7.jpg";
import image8 from "../../assets/Products/product-image-8.jpg";

import image9 from "../../assets/Products/product-image-9.jpg";
import image10 from "../../assets/Products/product-image-10.jpg";
import image11 from "../../assets/Products/product-image-11.jpg";
import image12 from "../../assets/Products/product-image-12.jpg";


const Products = () => {

  const products = [
    {
        _id: 1,
        Name: "PAPER POUCH",
        Price: 46.00,
        image: image1
    },
    {
        _id: 1,
        Name: "PAPER BAG",
        Price: 79.00,
        image: image2
    },
    {
        _id: 1,
        Name: "PLASTIC POUCH",
        Price: 27.00,
        image: image3
    },
    {
        _id: 1,
        Name: "COFFEE POT",
        Price: 71.00,
        image: image4
    },
    {
        _id: 1,
        Name: "TEA POT",
        Price: 54.00,
        image: image5
    },
    {
        _id: 1,
        Name: "CAFE BAGS",
        Price: 31.00,
        image: image6
    },
    {
        _id: 1,
        Name: "PAPER CUP",
        Price: 63.00,
        image:image7
    },
    {
        _id: 1,
        Name: "GROUND COFFEE",
        Price: 75.00,
        image: image8
    },
    {
        _id: 1,
        Name: "MOKA POT",
        Price: 18.00,
        image: image9
    },
    {
        _id: 1,
        Name: "CHOCO BITES",
        Price: 29.00,
        image: image10
    },
    {
        _id: 1,
        Name: "TEA CUP",
        Price: 46.00,
        image: image11
    },
    {
      _id: 1,
      Name: "GROUND COFFEE",
      Price: 22.00,
      image:image12
  }
  ];

  return (
    <>
      <section class="head-img">
        <img class="header-img" src={headImg} alt="" srcset="" />
      </section>

      <section className="section-prices">
        <div className="list-boxs">
           {products.map((prod, index) => (
            <div className="p-card starter" key={index}>
              <div className="p-head">
                {prod.Name}
              </div>
              <div className="ticket">${prod.Price}.00</div>
              <div className="p-body">
                <img src={prod.image} alt="" />
                <button className="p-btn">Add to Cart</button>
              </div>
            </div>
           ))}
        </div>
      </section>
    </>
  )
}

export default Products
import React, { useState } from 'react'
import './ProductDisplay.css'
import productsData from '../../Data/ProductData'

import { useParams } from 'react-router-dom';

const ProductDisplay = () => {

    const { productId } = useParams();
    const product = productsData.find(product => product._id === parseInt(productId));
    if (!product) {
        return <div>Product not found!</div>;
    }

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if(count>1){
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleAddToCart = () => {
        // Construct URL with query parameters
        const url = `/cart?productId=${product._id}&quantity=${count}&img=${product.image}&name=${product.Name}&price=${product.Price}`;
        // Redirect to cart page with selected product details
        window.location.href = url;
    }

    return (
        <>
            <div className="display">
                <div className="main-display">
                    <div className="column1">
                        <div className="main-img">
                            <img src={product.image} />
                        </div>
                        <div className="side-imgs">
                            <img src={product.image} />
                            <img src={product.image} />
                            <img src={product.image} />
                            <img src={product.image} />
                        </div>
                    </div>
                    <div className="column2">
                        <div className="main-con">
                            <h1>{product.Name}</h1>
                            <div className="ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <p>(2 customer reviews)</p>
                            </div>
                            <h1 className="price">${product.Price}</h1>
                            <p>
                                Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.
                            </p>
                            <div className="qty-btn">
                                <div className="qty">
                                    <i className="fa-solid fa-minus" onClick={decrement}></i>
                                    <span>{count}</span>
                                    <i className="fa-solid fa-plus" onClick={increment}></i>
                                </div>
                                <button className="prod-btn" onClick={handleAddToCart}>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="sub-con">
                            <p><span>SKU :</span> 11</p>
                            <p><span>CATEGORY :</span>Coffee</p>
                            <p><span>TAG :</span>Paper Bag</p>
                        </div>
                        <div className="share-box">
                            <span>share: </span>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- <hr> --> */}

                <div className="sub-display">
                    <div className="links">
                    </div>
                    <div className="desc">

                    </div>
                </div>

                {/* <!-- <hr> --> */}

                <div className="rel-prods">
                    <h2></h2>
                    <div className="prods-row">
                        <div className="rel-prod-card">

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductDisplay
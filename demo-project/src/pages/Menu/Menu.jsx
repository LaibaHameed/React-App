import React from 'react'
import "./Menu.css"
import headImg from "../../assets/menu-imgs/main-img.jpg"
import img1 from "../../assets/menu-imgs/h-1-list-icon-img-150x150.jpg";
import img2 from "../../assets/menu-imgs/h-1-list-icon-img-2-150x150.jpg"
import img3 from  "../../assets/menu-imgs/h-1-list-icon-img-3-150x150.jpg"
import img4 from  "../../assets/menu-imgs/h-1-list-icon-img-4-150x150.jpg"
import img5 from "../../assets/menu-imgs/h-1-list-icon-img-5-150x150.jpg"
import img6 from "../../assets/menu-imgs/h-1-list-icon-img-6-150x150.jpg"
import img7 from "../../assets/menu-imgs/h-1-list-icon-img-12-150x150.jpg"
import img8 from "../../assets/menu-imgs/h-1-list-icon-img-11-150x150.jpg"
import img9 from "../../assets/menu-imgs/h-1-list-icon-img-8-150x150.jpg"
import img10 from "../../assets/menu-imgs/h-1-list-icon-img-7-150x150.jpg"
import img11 from "../../assets/menu-imgs/h-1-list-icon-img-9-150x150.jpg"
import img12 from "../../assets/menu-imgs/h-1-list-icon-img-10-150x150.jpg"


const Menu = () => {
  const menuData = [
    {
        name: "CAFFE LATTE",
        price: "$2.95",
        description: "Fresh brewed coffee and steamed milk",
        isNew: true,
        imagePath: img1
    },
    {
        name: "CAFFE MOCHA",
        price: "$3.67",
        description: "Espresso With Milk, and Whipped Cream",
        isNew: false,
        imagePath: img2
    },
    {
        name: "WHITE CHOCOLATE MOCHA",
        price: "$2.79",
        description: "Espresso, White Chocolate, Milk, Ice and Cream",
        isNew: false,
        imagePath: img3
    },
    {
        name: "CAFFE AMERICANO",
        price: "$3.06",
        description: "Espresso Shots and Light Layer of Crema",
        isNew: false,
        imagePath: img4
    },
    {
        name: "CAPPUCCINO",
        price: "$4.03",
        description: "Espresso, and Smoothed Layer of Foam",
        isNew: false,
        imagePath: img5
    },
    {
        name: "VANILLA LATTE",
        price: "$3.65",
        description: "Espresso Milk With Flavor, and Cream",
        isNew: false,
        imagePath: img6
    }
    // Add more items as needed
];

const menuData2 = [
  {
      name: "ICED GINGERBREAD LATTE",
      price: "$3.92",
      description: "Espresso, Milk, Ice, and Gingerbread Flavor",
      isNew: false,
      imagePath: img7
  },
  {
      name: "ICED CAFFE MOCHA",
      price: "$2.60",
      description: "Espresso, bittersweet mocha sauce, milk and ice",
      isNew: false,
      imagePath: img8
  },
  {
      name: "ICED CARAMEL LATTE",
      price: "$4.67",
      description: "Espresso, Milk, Ice and Caramel Sauce",
      isNew: false,
      imagePath: img9
  },
  {
      name: "ESPRESSO MACCHIATO",
      price: "$2.98",
      description: "Rich Espresso With Milk and Foam",
      isNew: false,
      imagePath: img10
  },
  {
      name: "CARAMEL MACCHIATO",
      price: "$2.54",
      description: "Espresso, vanilla-flavored syrup and milk",
      isNew: true,
      imagePath: img11
  },
  {
      name: "ICED SMOKED LATTE",
      price: "$3.05",
      description: "Espresso, ice, with smoked butterscotch",
      isNew: false,
      imagePath: img12
  }
  // Add more items if needed
];


  return (
    <>
      <div class="head-img">
        <img class="header-img" src={headImg} alt="" srcset="" />
      </div>

      <div className="menu">
            <div className="menu-section">
                <div className="section1">
                    <h1 className="menu-no">COFFEE MENU NO 1</h1>
                    <div className="hr"></div>

                    {/* Map over menuData to render each menu item */}
                    {menuData.map((item, index) => (
                        <div key={index} className="parent-div">
                            <div className="child-div1">
                                <img src={item.imagePath} alt={item.name} />
                            </div>
                            <div className="child-div2">
                                <div className="sub-child1">
                                    <span>{item.name}</span> <span>{item.price}</span>
                                </div>
                                <div className="sub-child2">
                                    <p>{item.description}</p>
                                    {item.isNew && <span>New</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section1">
                    <h1 className="menu-no">COFFEE MENU NO 2</h1>
                    <div className="hr"></div>

                    {/* Map over menuData to render each menu item */}
                    {menuData2.map((item, index) => (
                        <div key={index} className="parent-div">
                            <div className="child-div1">
                                <img src={item.imagePath} alt={item.name} />
                            </div>
                            <div className="child-div2">
                                <div className="sub-child1">
                                    <span>{item.name}</span> <span>{item.price}</span>
                                </div>
                                <div className="sub-child2">
                                    <p>{item.description}</p>
                                    {item.isNew && <span>New</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu
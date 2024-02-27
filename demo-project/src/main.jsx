import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Reservation from './pages/Reservation/Reservation.jsx';
import MainGallery from './pages/MainGallery/MainGallery.jsx';
import AboutUs from './pages/About_Us/AboutUs.jsx';
import ContactUs from './pages/Contact_Us/ContactUs.jsx';
import Products from './pages/Products/Products.jsx';
import Cart from './pages/Cart/Cart.jsx';
import CheckOut from './pages/CheckOut/CheckOut.jsx';
import Account from './pages/Account/Account.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ProductDisplay from './pages/ProductDisplay/ProductDisplay.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path: 'menu',
        element: <Menu/>
      },
      {
        path: 'reservation',
        element: <Reservation/>
      },
      {
        path: 'main-gallery',
        element: <MainGallery/>
      },
      {
        path: 'about-us',
        element: <AboutUs/>
      },
      {
        path: 'contact-us',
        element: <ContactUs/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'product-display/:productId',
        element: <ProductDisplay/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'check-out',
        element: <CheckOut/>
      },
      {
        path: 'account',
        element: <Account/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'sign-up',
        element: <SignUp/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import "./Login.css"
import image from "../../assets/imgs/login-img2.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="log-container">
                <div className="login-box">
                    <div className="coll-1">
                        <img src={image} alt="" />
                    </div>
                    <div className="coll-2">
                        <h2>Welcome Back!</h2>
                        <form className='login-form'>

                            <label for="exampleInputEmail1">Email:</label>
                            <input type="email" className="input-field Email" placeholder="Enter your email" />

                            <label for="exampleInputEmail1">Password:</label>
                            <input type="text" className="input-field Password" placeholder="Enter password" />

                            <Link to={'/'}><button type="submit" className="">Login</button></Link>

                            <div className="Login-row">
                                <span className="span">Forget Password?</span>
                                <span className="span">Not a member? <Link to={'/sign-up'}><a>Sign Up</a></Link> </span>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
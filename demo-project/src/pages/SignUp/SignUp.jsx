import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom';
import google from "../../assets/imgs/google.png";
import image from "../../assets/imgs/img-coffe2.jpg"

const SignUp = () => {
  return (
    <>
        <div className="s-container">
    <div className="signUp-box">
        <div className="cols-1">
            <img src={image} alt=""/>
        </div>
        <div className="cols-2">
            <h2>Welcome!</h2>
            <span>Already have an Account? <Link to={'/login'}><a>Login</a></Link></span>
            <a href="#" className="google-link">
                <img src={google} alt=""/>Continue with google
            </a>
            <h4>or</h4>
            <form onsubmit="SubmitUserDetails(); return false" className='signup-form'>

                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="input-field Email"  placeholder="Enter your email"/>

                    <label for="exampleInputEmail1">Set Password</label>
                    <input type="text" className="input-field Password" placeholder="Enter password"/>

                    <div className="s-row">
                        <input type="checkbox" checked/>
                        <span>I agree to the <a href="#">terms and Conditions</a></span>
                    </div>

                    <Link to={'/'}><button type="submit">Register Now</button></Link>
            </form>
        </div>
    </div>
</div>

    </>
  )
}

export default SignUp
import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';
import {FaApple,FaFacebookF,FaGoogle} from 'react-icons/fa';
import '../assets/login.css';

function LoginPage(){
    return(
            <div className="mainDiv">
                <div className="login-title">
                    <h1>Login to your Account</h1>
                    <p>Choose from 130,000 online video couses with new additions</p>
                    <p>published every second month</p>
                </div> 
                <div className="signin">
                    <div className="signin-subdiv1">
                        <input type="text" placeholder="Brand / Influencer "/>
                        <input type="text" placeholder="8 Digit Pin"/>
                        <button className="login-btn">Login to Your Account<HiArrowNarrowRight /></button>
                    </div>
                    <div>/</div>
                    <div className="signin-subdiv2">
                        <button>< FaGoogle className="icons"/>Sign in with Google</button>
                        <button><FaFacebookF className="icons"/>sign in with Facebook</button>
                        <button><FaApple className="icons"/>sign in with Apple Account</button>
                    </div>
                </div>
                <div className="forget">
                    <span>Forget Password?</span>
                </div>
            </div>
    )
}

export default LoginPage
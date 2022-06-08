import React from "react";
import './login.css';
import imgLogin from '../../images/clipLogin.gif';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <div className='container'>

                <div className='login-left'>
                    <h1 className='login-title'> Welcome back! </h1>
                    <div className='login-image'>
                        <img src={imgLogin} alt="imagen login" width="400"/>
                    </div>
                </div>

                <div className='login-right'>

                    <form method="POST" className='login-form'>
                        <div className="login-item">
                            <label></label>
                            <input 
                            className="login-input"
                            type='text'
                            placeholder='Email or Username'/>
                        </div>
                        <div className="login-item">
                            <label></label>
                            <input 
                            className="login-input"
                            type='password'
                            placeholder='Password'/>
                        </div>
                        <label class="login-checkbox"> 
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            Remember me
                        </label>
                        <div className='login-item'>
                            <button className='login-button'> LOG IN </button>
                        </div>
                    </form>

                    <div className='login-section'>
                        <h4> Or sign in with</h4>
                        <div className="login-buttons">
                            <button className="login-social">Google</button>
                            <button className="login-social">LinkedIn</button>
                            <button className="login-social">GitHub</button>
                        </div>
                        <div className='login-register'>
                            <p className="login-text">Not a memeber?</p>
                            <Link to='/register'>
                                <p className="login-text"> Sign up </p>
                            </Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
};


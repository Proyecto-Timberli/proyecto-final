import React from "react";
import './login.css';
import imgLogin from '../../images/clipLogin.gif';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';


export default function Login() {
    return (
        <div>
            <div className='container'>

                <div className='login-left'>
                    <h1 className='login-title'> Welcome back! </h1>
                    <div className='login-image'>
                        <img src={imgLogin} className='imgLogin' alt="imagen login" width="400"/>
                    </div>
                </div>

                <div className='login-right'>

                    <form method="POST" className='login-form'>
                        <div className="login-item">
                            <label></label>
                            <input className="login-input" type='text' placeholder='Email'/>
                        </div>
                        <div className="login-item">
                            <label></label>
                            <input className="login-input" type='password' placeholder='Password'/>
                        </div>
                        <div className="login-item">
                            <label className="login-checkbox"> 
                                <input type="checkbox" name="rememberMe" style={{display: 'unset'}} className="rememberMe"/>
                                <span className="login-checkmark"></span>
                                Remember me
                            </label>
                        </div>
                        <div className='login-item'>
                            <button className='login-button'> LOG IN </button>
                        </div>
                    </form>

                    <div className='login-section'>
                        <h4> Or sign in with</h4>
                        <div className="login-buttons">
                            <a href='https://www.google.com/'>
                                <img src={google} width="60" alt="google" className='linkGoogle'/>
                            </a>
                            <a href='https://www.linkedin.com/'>
                                <img src={linkedin} width="60" alt="linkedIn" className='linkLinkedin'/>
                            </a>
                            <a href='https://github.com/'>
                                <img src={github} width="60"  alt="github" className='linkGithub'/>
                            </a>
                        </div>
                        <div className='login-register'>
                            <p className="login-text">Not a member? </p>
                            <Link className="login-link" to='/register'>
                                <p className='login-text'> Sign up </p>
                            </Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
};


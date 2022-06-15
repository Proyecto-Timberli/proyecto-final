import React from 'react'
import './register.css'
import imgSignUp from './signup-image.png'
import validateForm from './validation.js'

import { useState } from 'react';

import { scroll } from "../../functions";
import axios from 'axios'

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: "",
        tos: false
    })

    function registerUser() {
        // intentamos validar
        let errors = validateForm(formData)
        console.log(errors)

    }

    //scroll()
    return (
        <div>
            <section className="signup">
                <div className="container-register">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Sign up</h1>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text"
                                    className="register-input" 
                                    placeholder=" Nombre"
                                    value={formData.name}
                                    onChange={(e) => {
                                        
                                        setFormData({...formData, name: e.target.value})
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email"
                                    className="register-input"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({...formData, email: e.target.value})
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password"
                                    className="register-input"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => {
                                        setFormData({...formData, password: e.target.value})
                                    }}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password"
                                    className="register-input"
                                    placeholder="Repite tu password"
                                    value={formData.repeat_password}
                                    onChange={(e) => {
                                        setFormData({...formData, repeat_password: e.target.value})
                                    }} />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox"
                                    name="agree-term"
                                    id="agree-term"
                                    className="agree-term"
                                    checked={formData.tos}
                                    onChange={(e) => {
                                        setFormData({...formData, tos: !formData.tos})
                                    }}/>
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Acepto todos los   <a href="#" className="term-service">términos y condiciones</a></label>
                                </div>
                                <div className="form-button">
                                    <input type="submit"
                                    name="signup"
                                    id="signup"
                                    className="form-submit"
                                    value="Registrar"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        registerUser()
                                    }}/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={imgSignUp} alt="sing up" /></figure>
                            <a href="/login" className="signup-image-link">Ya soy miembro, quiero logearme</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
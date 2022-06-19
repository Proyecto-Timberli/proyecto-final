import React from 'react'
import './register.css'
import imgSignUp from './signup-image.png'
import validateForm from './validation.js'

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//import { scroll } from "../../functions";
import axios from 'axios'

function Register() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: "",
        tos: false
    })

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        password: "",
        repeat_password: "",
        tos: ""
    })

    async function registerUser() {
        let errors = validateForm(formData)

        if (Object.keys(errors).length === 0) {
            let { data } = await axios.post(process.env.REACT_APP_API + "/api/auth/register", formData)
            if (data.status === "success") {
                navigate("/login", { state: { registerSuccess: true } })
            }
        } else {
            setFormErrors(errors)
        }
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
                                    <input type="text"
                                        className="register-input"
                                        placeholder=" Nombre"
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value })
                                        }} />
                                    <label className='formErrors-label'>{formErrors.name}</label>
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                        className="register-input"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value })
                                        }} />
                                    <label className='formErrors-label'>{formErrors.email}</label>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="register-input"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) => {
                                            setFormData({ ...formData, password: e.target.value })
                                        }} />
                                    <label className='formErrors-label' >{formErrors.password}</label>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="register-input"
                                        placeholder="Repite tu password"
                                        value={formData.repeat_password}
                                        onChange={(e) => {
                                            setFormData({ ...formData, repeat_password: e.target.value })
                                        }} />
                                    <label className='formErrors-label' >{formErrors.repeat_password}</label>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox"
                                        name="agree-term"
                                        id="agree-term"
                                        className="agree-term"
                                        checked={formData.tos}
                                        onChange={(e) => {
                                            setFormData({ ...formData, tos: !formData.tos })
                                        }} />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Acepto todos los   <a href="noopener" className="term-service">términos y condiciones</a></label>
                                    <label className='formErrors-label' >{formErrors.tos}</label>
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
                                        }} />
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

export default Register;
import React from 'react'
import './register.css'
import imgSignUp from './signup-image.png'
import validateForm from './validation.js'
import github from '../../../images/github.png';
import google from '../../../images/google.png'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleInputOnBlur = (e) => {
        setFormErrors({
            ...formErrors,
            [e.target.name]: validateForm(formData)[e.target.name],
        });
    }

    async function registerUser() {
        let errors = validateForm(formData)
        if (Object.keys(errors).length === 0) {
            let { data } = await axios.post(process.env.REACT_APP_API + "/api/auth/register", formData)
            if (data.status === "success") {
                navigate("/login", { state: { registerSuccess: true } })
            } else {
                setFormErrors({
                    ...formErrors,
                    email: data.error,
                })
            }
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <section className="signup">
                <div className="container-register">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Crea tu cuenta</h1>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <input name="name"
                                        type="text"
                                        className="register-input"
                                        placeholder=" Nombre"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onBlur={handleInputOnBlur} />
                                    <div className="register-formErrors-p-container">
                                        {formErrors.name && <p className="register-formErrors-p">{formErrors.name}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input name="email"
                                        type="email"
                                        className="register-input"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={handleInputOnBlur} />
                                    <div className="register-formErrors-p-container">
                                        {formErrors.email && <p className="register-formErrors-p">{formErrors.email}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input name="password"
                                        type="password"
                                        className="register-input"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        onBlur={handleInputOnBlur} />
                                    <div className="register-formErrors-p-container">
                                        {formErrors.password && <p className="register-formErrors-p">{formErrors.password}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input name="repeat_password"
                                        type="password"
                                        className="register-input"
                                        placeholder="Repite tu password"
                                        value={formData.repeat_password}
                                        onChange={handleInputChange}
                                        onBlur={handleInputOnBlur} />
                                    <div className="register-formErrors-p-container">
                                        {formErrors.repeat_password && <p className="register-formErrors-p">{formErrors.repeat_password}</p>}
                                    </div>
                                </div>
                                <div className="form-group-checkbox">
                                    <input type="checkbox"
                                        name="agree-term"
                                        id="agree-term"
                                        className="agree-term"
                                        checked={formData.tos}
                                        onChange={(e) => {
                                            setFormData({ ...formData, tos: !formData.tos })
                                        }} />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Acepto todos los   <a href="#" className="term-service">t??rminos y condiciones</a></label>
                                    <div className="register-formErrors-p-container">{formErrors.tos && <p className="register-formErrors-p">{formErrors.tos}</p>} </div>
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

                                <h4> Or sign in with</h4>
                            <div className="login-buttons">
                                <a href={process.env.REACT_APP_API + '/api/auth/github'}>
                                    <img src={github} width="60" alt="github" className='linkgoogle' />
                                </a>
                                <a href={process.env.REACT_APP_API + '/api/auth/google'}>
                                    <img src={google} width="60" alt="github"  />
                                </a>
                            </div>
                            <Link to="/login" className="signup-image-link">Ya soy miembro, quiero iniciar sesion.</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register;
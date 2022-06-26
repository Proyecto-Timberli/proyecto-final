import React from "react";
import './login.css';
import imgLogin from './images/clipLogin.gif';
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdInsertEmoticon } from "react-icons/md";
import linkedin from '../../../images/linkedin.png';
import github from '../../../images/github.png';
import google from '../../../images/google.png'
import { scroll } from "../../../functions";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setLoggedUserId } from "../../../redux/actions/actionCreators";

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch()


    const [formErrors, setFormErrors] = useState({ error: "" })

    const [comingFromRegister, setComingFromRegister] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    if (!comingFromRegister && location.state && location.state.registerSuccess) {
        setComingFromRegister(true)
    }

    function showFromRegisterMessage() {
        if (comingFromRegister) {
            return <div className="registro-exitoso-box">
                <p className="msj-exitoso-login"> Registro exitoso, ahora puedes iniciar sesión!</p>
            </div>
        }
    }

    function loginAttempt() {
        // intento de login
        axios.post(process.env.REACT_APP_API + '/api/auth/login', {
            email: formData.email,
            password: formData.password
        }).then(response => {
            // Login exitoso
            if (response.data.status === "success") {

                localStorage.setItem('usertoken', response.data.token)
                localStorage.setItem('userid', response.data.id)
                dispatch(setLoggedUserId(response.data.id))
                return navigate('/home')
            }
        })
            .catch(err => {
                // Login Fallido                
                setFormErrors(
                    { error: err.response.data.error }
                )


            })
    }


    scroll()
    return (<>
        {showFromRegisterMessage()}
        <div className='container-login'>

            <div className='login-left'>
                <h1 className='login-title'> Bienvenido! </h1>
                <div className='login-image'>
                    <img src={imgLogin} className='imgLogin' alt="imagen login" width="400" />
                </div>
            </div>

            <div className='login-right'>

                <form method="POST" className='login-form'>
                    <div className="login-item">
                        <label></label>
                        <input
                            className="login-input"
                            type='text'
                            placeholder='Email'
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }} />
                    </div>
                    <div className="login-item">
                        <label></label>
                        <input
                            className="login-input"
                            type='password'
                            placeholder='Contraseña'
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value
                                })
                            }} />
                    </div>
                    <div className='login-item'>
                        <label className="login-formError">{formErrors.error}</label>
                    </div>
                    <div className='login-item'>
                        <button
                            className='login-button'
                            onClick={(e) => {
                                e.preventDefault()
                                loginAttempt()
                            }}> Inicia Sesion </button>
                    </div>
                </form>

                <div className='login-section'>
                    <h4> Or sign in with</h4>
                    <div className="login-buttons">
                        <a href={process.env.REACT_APP_API + '/api/auth/google'}>
                            <img src={linkedin} width="60" alt="linkedIn" className='linkLinkedin' />
                        </a>
                        <a href={process.env.REACT_APP_API + '/api/auth/github'}>
                            <img src={github} width="60" alt="github" className='linkGithub' />
                        </a>
                        <a href={process.env.REACT_APP_API + '/api/auth/google'}>
                            <img src={google} width="60" alt="github" className='linkGithub' />
                        </a>
                    </div>
                    <div className='login-register'>
                        <p className="login-text">No sos miembro? </p>
                        <Link className="login-link" to='/register'>
                            <p className='login-text'> Registrate! </p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    </>)
};


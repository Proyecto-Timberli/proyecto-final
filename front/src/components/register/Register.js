import React from 'react'
import './register.css'
import imgSignUp from './signup-image.png'

function Register() {
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
                                    <input type="text" className="register-input" placeholder=" Nombre" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" className="register-input" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" className="register-input" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" className="register-input" placeholder="Repite tu password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Acepto todos los   <a href="#" className="term-service">términos y condiciones</a></label>
                                </div>
                                <div className="form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Registrar" />
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
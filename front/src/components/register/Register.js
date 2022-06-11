import React from 'react'
import './register.css'
import imgSignUp from './signup-image.png'

function Register() {
  return (
    <div>
        <section class="signup">
            <div class="container-register">
                <div class="signup-content">
                    <div class="signup-form">
                        <h1 class="form-title">Sign up</h1>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" className="register-input" placeholder=" Nombre"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" className="register-input"  placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" className="register-input"  placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" className="register-input"  placeholder="Repite tu password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>Acepto todos los   <a href="#" class="term-service">términos y condiciones</a></label>
                            </div>
                            <div class="form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Registrar"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={imgSignUp} alt="sing up"/></figure>
                        <a href="/login" class="signup-image-link">Ya soy miembro, quiero logearme</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Register
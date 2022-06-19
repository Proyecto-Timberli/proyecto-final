import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import './footer.css'


function Footer() {
    return (
        <footer>
            <div className='contenedor-footer'>

                <div className='part-arriba'>
                    <div className='footer-left'>
                        <h1 className='h1-footer'>Proyecto Timberli.</h1>
                        <div className='footer-socials'>
                            <a className='footer-social' href='https://github.com/Proyecto-Timberli' target="_blank" rel='noreferrer'><BsGithub /></a>
                            <a className='footer-social' href='https://www.linkedin.com/in/project-timberli-507312242/' target="_blank" rel='noreferrer'><BsLinkedin /></a>
                            <a className='footer-social' href='https://www.instagram.com/project.timberli/' target="_blank" rel='noreferrer'><BsInstagram /></a>
                            <a className='footer-social' href='https://twitter.com/ProjectTimberli' target="_blank" rel='noreferrer'><BsTwitter /></a>
                        </div>
                    </div>

                    <div className='footer-right'>
                        <Link to='/about' className='p-link'>
                            <p className='a-footer'>ABOUT</p>
                        </Link>
                        <Link to='/payment' className='p-link'>
                            <p className='a-footer'>CONTRIBUI</p>
                        </Link>
                    </div>

                </div>

                <div className='part-abajo'>
                    <p> © Copyright - 2022</p>
                </div>

            </div>
        </footer>

    )
}

export default Footer
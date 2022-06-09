import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div>
            <div className='contenedor-footer'>
                <div className='part-arriba'>
                    <h1 className='h1-footer'>Proyecto Final SoyHenry</h1>
                </div>

                <div className='part-abajo'>
                    <Link className='a-footer' to='/about'>

                        <p className='p-link'>  About
                        </p>
                    </Link>
                </div>

                <p> ©Copyright - 2022</p>
            </div>
        </div>
    )
}

export default Footer
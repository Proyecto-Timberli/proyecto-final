import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div>
            <footer>
                <div className='contenedor-footer'>
                    <div className='part-arriba'>
                        <h1 className='h1-footer'>Proyecto Final SoyHenry</h1>
                    </div>

                    <div className='part-abajo'>
                        <p className='p-link'>
                            <Link className='a-footer' to='/about'>

                                About
                            </Link>
                        </p>
                    </div>

                    <p> ©Copyright - 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
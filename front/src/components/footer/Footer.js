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
                        <Link to='/about'>
                            <div className='p-link'>
                                <p className='a-footer'>About</p>
                            </div>
                        </Link>
                    </div>

                    <p> ©Copyright - 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
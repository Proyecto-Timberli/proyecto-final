import React from 'react'
import imagen from './signup-image.png'
import {Link} from 'react-router-dom'
import './project.css'
function Project() {
  return (
    <div>
            <div className='card-container'>
                            <h2 className='tituloDetalle'>TITULO PROYECTO</h2>
                            <div className='Contenedor-detalles'>
                                <div className='cont-img-detalle'>
                                    {/* IMAGEN */}
                                    <img className='card-img-detalle' src={imagen}></img>
                                </div>
                                {/*  */}
                                <div className='cont-info'>
                                    {/*Usuario*/}
                                    <div >
                                        <h3>Usuario:</h3>
                                        <div className='info-detalle' >Lucas Luna Clarasó</div>
                                    </div>
                                    {/* Deploy */}

                                    <div >
                                        <h3>Deploy:</h3>
                                        <div className='info-detalle' ><Link to='https://localhost:3000'> Link Deploy</Link></div>
                                    </div>
                                    {/* GitHub */}
                                    <div>
                                        <h3>GitHub:</h3>
                                        <div className='info-detalle'><Link to='https://github.com/lucaslunacl'> Perfil GitHub</Link></div>
                                    </div>

                                    {/* Linkedin */}
                                    <div>
                                        <h3>Linkedin:</h3>
                                        <div className='info-detalle'><Link to='https://www.linkedin.com/in/lucas-luna-claras%C3%B3-03a846203/'> Perfil Linkedin</Link></div>
                                    </div>
                                    
                                </div>
                            </div>
                            {/*DESCRIPTION */}
                            <div>
                                <div className='desc-detalle'>
                                    <h3>Descripcion:</h3>
                                    <div>
                                        lorem ipsum dolor
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default Project
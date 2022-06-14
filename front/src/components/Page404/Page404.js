import React from 'react';
import { Link } from 'react-router-dom'
import './page404.css'

const Page404 = () => {
    return (
        <div>
            <h1 className="P404-numero"> 404</h1>
            <h2 className="P404-texto">Pagina No Encontrada!</h2>
            <h3><Link className='P404-link' to="/">Volver al Inicio</Link></h3>
        </div>
    );
}

export default Page404;
import React from 'react';
import { Link } from 'react-router-dom'
import './page404.css';

const Page404 = () => {
    return (
        <div className='container-error404'>
            <h1 className="P404-numero"> 404</h1>
            <h2 className="P404-texto">Pagina No Encontrada!</h2>
            <Link className='P404-link' to="/home">
                <p className='p404-button'>Volver al Inicio</p>
            </Link>
        </div>
    );
}

export default Page404;
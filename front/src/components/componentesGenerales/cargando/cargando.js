import React from 'react';
import spinner from "./spinner.gif";
import './cargando.css';


const Cargando = () => {
    return (
        <div className='cargando-container'>
            <img src={spinner} className='cargando'alt="Spinner" />
        </div>
    );
}

export default Cargando;
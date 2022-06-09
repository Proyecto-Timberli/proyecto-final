import React from 'react';
import spinner from "./spinner.gif"
const Cargando = () => {
    return (<div>
        <p>Cargando...</p>
        <img src={spinner} alt="Spinner" />
    </div>);
}

export default Cargando;
import React from 'react';
import { Link } from 'react-router-dom'


const Page404 = () => {
    return (<div>
        <h1> 404 Pagina No Encontrada!</h1>  <Link to="/"><h3>Volver al Inicio</h3></Link>
    </div>);
}

export default Page404;
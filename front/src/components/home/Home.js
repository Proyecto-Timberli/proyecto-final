import React, { Fragment } from 'react';
import "../home/home.css"

const Home = () => {
    return (
        <div className='Contenedor-Principal'>
            <div id="Cont-populares">
                <p>Proyectos Populares!</p>
                <div className='Carrusel'>Caja Grande</div>
            </div>
            <div>
                <div className='cont-filtros'>
                    <select>
                        <option> Opcion 1</option>
                    </select>
                    <div>
                        <input />
                        <button>Buscar</button>
                    </div>
                    <select>
                        <option> Opcion 1</option>
                    </select>
                </div>
                <div id='cards-cont'>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                    <div className='card'>Caja</div>
                </div>
                <div>Paginador!</div>
            </div>
        </div>
    );
}

export default Home;
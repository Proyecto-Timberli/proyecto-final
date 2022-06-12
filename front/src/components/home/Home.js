import { Fragment, useEffect, useState } from 'react';
import Card from "./card/Card.js"
import "../home/home.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, loggin } from '../../redux/actions/actionCreators'
import Paginado from './Paginado'
import Orders from './Orders.js';


const Home = () => {
    //////////////////////////////////////////////////////////////////////////////
    let dispatch = useDispatch()
    let allProjects = useSelector((state) => state.allProject)
    useEffect(() => {
        dispatch(getAllProjects());
    }, [])

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });
    const paginado = new Paginado(9, allProjects, cardsInPag.pag, null, "Any", 1)
    const accionarPaginado = (selectPag, selectFilter) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag, selectFilter)
        })
    }
    useEffect(() => {
        if (allProjects.length) {
            accionarPaginado(1)
        }
    }, [allProjects])
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    let logger = useSelector((state) => state.logged)
    console.log(allProjects[1])
    //////////////////////////////////////////////////////////////////////////////
    return (
        <div className='Contenedor-Principal'>
            <div id="Cont-populares">
                <p>Proyectos Populares!</p>
                <div className='Carrusel'>Caja Grande</div>
            </div>
            <div>
                <hr></hr>
                <div>
                    {logger ? <Link to="/newProject"> Publica tu proyecto!</Link> : <p> Para publicar, logueate</p>}
                </div>
                <div className='cont-filtros'>
                    <Orders />
                </div>

                {(Object.keys(allProjects).length === 0) ? <div>No existen proyectos con esos parametros </div> :
                    <div className='cards-cont'>
                        {/* Map para mostrar las Cards */}

                        {cardsInPag.renderCards.map(e => (!!e) && <Card
                            description={e.description}
                            key={e.id}
                            name={e.name}
                            id={e.id}
                            user={e.user.userName}
                            imagen = {e.imagen}
                        />)}
                    </div>
                }
                {/* Espacio */}
                <br></br>
                <div>Paginador!</div>
                <div>
                    {paginado.buttons().map(button =>
                        <div key={button}>
                            {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginado(button)}>{button}</button>}
                            {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginado(button)}>{button}</button>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
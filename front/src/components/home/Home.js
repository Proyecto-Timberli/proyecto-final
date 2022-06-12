import { Fragment, useEffect, useState } from 'react';
import Card from "./card/Card.js"
import "../home/home.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, loggin } from '../../redux/actions/actionCreators'
import Paginado from './Paginado'
import Orders from './Orders.js';
import Group11 from '../../images/Group 11.png';
import Group10 from '../../images/Group 10.jpg';
import landingimage from '../../images/landingImage.jpeg';


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
                <div className="sheetSlider  sh-default  sh-auto " >
                    <input id="s1" type="radio" name="slide1" checked />
                    <input id="s2" type="radio" name="slide1" />
                    <input id="s3" type="radio" name="slide1" />
                    <div className="sh__content">
                        <div className="sh__item">
                            <img src={Group10} alt="imgText" />
                            <div className="sh__meta">
                                <h4>Timberli!</h4>
                                <span>Proyecto final</span>
                            </div>
                        </div>
                        <div className="sh__item">
                            <img src={landingimage} />
                            <div className="sh__meta">
                                <h4>Timberli!</h4>
                                <span>Proyecto final</span>
                            </div>
                        </div>
                        <div className="sh__item">
                            <img src={Group11} alt="imgText" />

                            <div className="sh__meta">
                                <h4>Timberli!</h4>
                                <span>Proyecto final</span>
                            </div>
                        </div>
                    </div>
                    <div className="sh__btns">
                        <label for="s1"></label>
                        <label for="s2"></label>
                        <label for="s3"></label>
                        <label for="s4"></label>
                    </div>
                    <div className="sh__arrows">
                        <label for="s1"></label>
                        <label for="s2"></label>
                        <label for="s3"></label>
                    </div>
                    <button class="sh-control"></button>
                </div>
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
                        <div className="container-paginado" key={button}>
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
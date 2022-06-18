import {useEffect, useState} from 'react';
import Card from "./card/Card.js"
import "../home/home.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects} from '../../redux/actions/actionCreators'
import Paginado from './Paginado'
import Orders from './Orders.js';
import {technologies} from './technologies.js'
import { scroll } from "../../functions";

const Home = () => {
    scroll()
    //////////////////////////////////////////////////////////////////////////////
    let dispatch = useDispatch()
    let allProjects = useSelector((state) => state.allProject)
    useEffect(() => {
        dispatch(getAllProjects());
    }, [])
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////filter by search////////////////////////////
    const [filterBySearch, setFilterBySearch] = useState("")
    let arrayFilterBySearch = allProjects.filter(project => project.name&&project.name.toLowerCase().includes(filterBySearch.toLowerCase()))
    const searchFilterChange= function(e){
        setFilterBySearch(e.target.value);
    }
    let estadoGlobalDeCards = allProjects
    if (filterBySearch!==""){
        estadoGlobalDeCards = arrayFilterBySearch   
    }
    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////filter by techs///////////////////////////////////////////////////
    const [filterTechs , setFilterTechs] = useState("Any");
    const filterByTech = ()=>{
        let arrayFilterByTechs=estadoGlobalDeCards.filter(project => project.tecnology&&project.tecnology.includes(filterTechs))
        return  arrayFilterByTechs 
    }
    const techFilterChange= function(e){
        setFilterTechs(e.target.value);
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////config paginado//////////////////////////////////////////////
    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });
    let paginado = new Paginado(9, estadoGlobalDeCards, cardsInPag.pag, filterByTech(),filterTechs,)
    const accionarPaginado = (selectPag) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag)
        })
    }       
    useEffect(() => {
        if (allProjects.length) {   
            accionarPaginado(1)  
        }
    }, [allProjects,filterTechs,filterBySearch])
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    let logger = useSelector((state) => state.loggedUserId)
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    return (
        <div className='Contenedor-Principal'>
            <div>
                <hr></hr>
                <div className='home-publica-si-logged'>
                    {logger ? <Link to="/newProject" className='home-publicar-link'> Publica tu proyecto!</Link> : <p className='home-publicar'> Para publicar, logueate</p>}
                </div>
                <div className='cont-filtros'>
                    <div>
                      <input type="search" placeholder="Buscar proyecto..." name="search" onChange={(e)=>searchFilterChange(e)} value={filterBySearch}/>
                    </div>
                    <Orders />
                    <select name="technologies" id="technologies" onChange={(e)=>techFilterChange(e)}>
                      <option key="Any" value={"Any"} >Any</option>
                      {technologies.map((tech, index)=> 
                      <option key={index} value={tech.name}>{tech.name}</option>)}
                    </select>
                </div>

                {(Object.keys(allProjects).length === 0) ? <div>No existen proyectos con esos parametros </div> :
                    <div className='cards-cont'>
                        {/* Map para mostrar las Cards */}
                        {cardsInPag.renderCards.map(e => (!!e) && <Card
                            description={e.shortDescription}
                            key={e.id}
                            name={e.name}
                            id={e.id}
                            user={e.user.name}
                            imagen={e.imagen}
                            userId={e.userId}
                            scoreFunctionality={e.scoreFunctionality}
                            scoreOriginality={e.scoreOriginality}
                            scoreStyle={e.scoreStyle}

                            score={e.scoreAverage}
                        />)}
                    </div>
                }
                {/* Espacio */}
                <br></br>
                <div>
                    {paginado.buttons().map(button =>
                        <div className="container-paginado" key={button}>
                            {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginado(button)}>{button}</button>}
                            {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginado(button)}>{button}</button>}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Home;
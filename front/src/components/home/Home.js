//import { Fragment, useEffect } from 'react';
import Card from "./card/Card.js"
import "../home/home.css"
import { Link } from 'react-router-dom'
//import { useDispatch, useSelector } from "react-redux";
//import GET_PROJECTS from '../../redux/actions/actionCreators'


const Home = () => {

    // let dispatch = useDispatch()
    // let allProjects = useSelector((state) => state.projects)

    // useEffect(() => {

    //     dispatch(GET_PROJECTS());

    // }, [])


    let arrayAMostrar = [1, 2, 3, 4] //  allProjects
    let logger = true;
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
                <div className='cards-cont'>
                    {/* Map para mostrar las Cards */}

                    {arrayAMostrar.map(e => <Card
                        key={e}
                    />)}
                </div>

                <div>Paginador!</div>
            </div>
        </div>
    );
}

export default Home;
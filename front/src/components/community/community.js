import React, { Fragment, useEffect, useState } from 'react';
import "./community.css"
import { getAllUsers } from '../../redux/actions/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import { filtroName, ordenamiento } from '../../functions';
import CardCommunity from './cardCommunity/cardCommunity';

const Community = () => {
    let dispatch = useDispatch()
    let allUsers = useSelector((state) => state.allUsers)
    let arrayAmostrar = [...allUsers]
    const [orden, setOrden] = useState("id")


    const [filterBySearch, setFilterBySearch] = useState("")


    let filtro = filtroName(allUsers, filterBySearch, "name")
    const filtroBusqueda = function (e) {
        setFilterBySearch(e.target.value);
    }
    arrayAmostrar = [...allUsers]
    if (filterBySearch !== "") {
        arrayAmostrar = filtro
    }

    function handleChange(e) {
        e.preventDefault()
        setOrden(e.target.value)
        arrayAmostrar = ordenamiento(arrayAmostrar, orden)
    }
    useEffect(() => {
        dispatch(getAllUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    arrayAmostrar = ordenamiento(arrayAmostrar, orden)

    return (
        <Fragment>
            <div className='cont-filtro-community'>
                Busca Por Nombre
                <input className='input-community' type="search" placeholder="Buscar un usuario..." name="search" onChange={(e) => filtroBusqueda(e)} value={filterBySearch} />

                Ordenar por:
                <select className='select-community' onChange={e => handleChange(e)}>
                    <option value="id">Nro.Registro</option>
                    <option value="name">Nombre</option>
                    <option value="projects">Cant.Proyectos</option>

                </select>
            </div>
            <div className='community-cont'>
                {/* <div>
                Listado de Usuarios!
            </div> */}
                <div className='community-cont-card'>

                    {arrayAmostrar.map(e =>
                        <div>

                            <CardCommunity
                                name={e.name}
                                id={e.id}
                                key={e.id}
                                project={e.projects}
                                image={e.image}
                                short_description={e.short_description}
                            />
                            <hr></hr>
                        </div>
                    )}
                </div>

            </div>
        </Fragment>
    );
}

export default Community;
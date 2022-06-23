import React, { Fragment, useEffect, useState } from 'react';
import "./community.css"
import { getAllUsers } from '../../redux/actions/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import { ordenar } from '../../functions';
import CardCommunity from './cardCommunity/cardCommunity';

const Community = () => {
    let dispatch = useDispatch()
    let allUsers = useSelector((state) => state.allUsers)
    let arrayAmostrar = [...allUsers]
    const [orden, setOrden] = useState("fecha")

    function handleChange(e) {
        e.preventDefault()
        setOrden(e.target.value)
        ordenar(arrayAmostrar, orden)

    }

    useEffect(() => {
        dispatch(getAllUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    ordenar(arrayAmostrar, orden)

    return (
        <Fragment>
            <div className='cont-filtro-community'>Filtra por:
                <select className='select-community' onChange={e => handleChange(e)}>
                    <option value="fecha">Orden de registro</option>
                    <option value="nombre">Nombre</option>
                    <option value="proyectos">Cant.Proyectos</option>

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
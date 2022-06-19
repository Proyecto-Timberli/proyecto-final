import React, { useEffect, useState } from 'react';
import "./community.css"
import { getAllUsers } from '../../redux/actions/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { ordenar } from '../../functions';
import CardCommunity from './cardCommunity/cardCommunity';

const Community = () => {
    let dispatch = useDispatch()
    let allUsers = useSelector((state) => state.allUsers)
    let arrayAmostrar = [...allUsers]
    const [orden, setOrden] = useState("fecha")

    console.log(allUsers);

    function handleChange(e) {
        e.preventDefault()
        setOrden(e.target.value)
        ordenar(arrayAmostrar, orden)

    }

    useEffect(() => {
        dispatch(getAllUsers())

    }, [])
    ordenar(arrayAmostrar, orden)

    return (
        <div className='community-cont'>
            <div>
                Listado de Usuarios!
            </div>
            <div className='cont-filtro-community'>Filtra por:
                <select className='select-community' onChange={e => handleChange(e)}>
                    <option value="fecha">Orden de registro</option>
                    <option value="nombre">Nombre</option>

                </select>
            </div>
            <div className='community-cont-card'>

                {arrayAmostrar.map(e =>
                    <CardCommunity
                        name={e.name}
                        id={e.id}
                        key={e.id}
                        project={e.projects}
                        image={e.image}
                        rol={e.rol}
                    />
                )}
            </div>

        </div>
    );
}

export default Community;
import React, { useEffect, useState } from 'react';
import "./community.css"
import { getAllUsers, adminSupendUser } from '../../redux/actions/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { ordenar } from '../../functions';

const Community = () => {
    let dispatch = useDispatch()
    let allUsers = useSelector((state) => state.allUsers)
    const [orden, setOrden] = useState("fecha")

    function handleChange(e) {
        e.preventDefault()
        setOrden(e.target.value)
        ordenar(allUsers, orden)

    }

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    ordenar(allUsers, orden)


    console.log(allUsers);


    return (
        <div>
            <div>
                Comunidad!
            </div>
            <div className='cont-filtro-community'>Filtra por:
                <select className='select-community' onChange={e => handleChange(e)}>
                    <option value="fecha">Orden de registro</option>
                    <option value="nombre">Nombre</option>

                </select>
            </div>
            {allUsers.map(e => <div key={e.id}>
                <label>{e.id}  </label>
                <Link to={"/user/" + e.id}>{e.name.toUpperCase()}</Link>
                <label>  {e.rol}</label>
            </div>)}

        </div>
    );
}

export default Community;
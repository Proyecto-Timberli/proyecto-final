import React, { useState, useEffect } from 'react'
import { MdPersonOff, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../../redux/actions/actionCreators'
import Paginado from '../../home/Paginado.js'
import { Link } from 'react-router-dom'

import './listadoS.css'
function ListadoS() {
    let dispatch = useDispatch()
    let allUsers = useSelector((state) => state.allUsers)
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])
    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });
    const paginado = new Paginado(9, allUsers, cardsInPag.pag, null, "Any", 1)
    const accionarPaginado = (selectPag, selectFilter) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag, selectFilter)
        })
    }
    useEffect(() => {
        if (allUsers.length) {
            accionarPaginado(1)
        }
    }, [allUsers])
  return (
   

    <div>
        <div className='arriba-contenedor-suspendidos'>
                <MdPersonOff className='icono-title-suspendidos' />
                <h1>Listado de Usuarios Suspendidos</h1>
            </div>
            {(Object.keys(allUsers.userType==='suspended').length === 0) ?
                <div>NO HAY USUARIOS</div>
                :
                <div className="contenedor-listado-user">
                    {
                        cardsInPag.renderCards.map(u => ((!!u) &&
                            <div>
                                <div className='user-card-admin' key={u.id}>
                                    <li key={u.id}> <Link to={"/user/" + u.id}>{u.name.toUpperCase()}</Link> </li>
                                    <div className='content-project-state'>
                                        <MdKeyboardArrowDown  />
                                    </div>

                                </div>
                                {/* {
                                    desplegar === 1 ?
                                        <div className='user-desplegable-admin'>
                                            <div className='button-desplegable'><button >CAMBIAR ROL</button></div>
                                            <div className='button-desplegable'><button>REPORTES</button></div>
                                            <div className='button-desplegable'><button>PROYECTOS</button></div>
                                            <div className='button-desplegable'><button>BORRAR</button></div>

                                        </div>
                                        : null
                                } */}

                            </div>
                        ))
                    }
                </div>
            }
            <div>
                {paginado.buttons().map(button =>
                    <div className="container-paginado" key={button}>
                        {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginado(button)}>{button}</button>}
                        {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginado(button)}>{button}</button>}
                    </div>
                )}
            </div>

    </div>
  )
}

export default ListadoS
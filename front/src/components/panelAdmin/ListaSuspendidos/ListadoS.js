import React, { useState, useEffect } from 'react'
import { MdPersonOff, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../../redux/actions/actionCreators'
import Paginado from '../../home/Paginado.js'
import ModalSuspendidos from './modalSuspendidos/ModalSuspendidos.js'

import { Link } from 'react-router-dom'

import './listadoS.css'
function ListadoS() {
    let dispatch = useDispatch()
    let allUserss = useSelector((state) => state.allUsers)
     let allUsers = allUserss.filter( (e)=> {
        return e.userType === 'suspended'
    })
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])
    const [modal, setModal] = useState(0)

    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });
    const [desplegar, setDesplegar] = useState(0)

    const paginado = new Paginado(9, allUsers, cardsInPag.pag, null, "Any", 1)
    const accionarPaginado = (selectPag, selectFilter) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag, selectFilter)
        })
    }
    useEffect(() => {
        if (allUserss.length) {
            accionarPaginado(1)
        }
    }, [allUserss])

    function cambiarEstado(e) {
        e.preventDefault()
        if (desplegar === 0) {
            setDesplegar(1)
        } else if (desplegar === 1) {
            setDesplegar(0)

        }
    }

    function cambiarEstadoModal(e) {
        e.preventDefault()
        if (modal === 0) {
            setModal(1)
        }
        else if (modal === 1) {
            setModal(0)
        }
    }
    return (


        <div>
            <div className='arriba-contenedor-suspendidos'>
                <MdPersonOff className='icono-title-suspendidos' />
                <h1>Listado de Usuarios Suspendidos</h1>
            </div>
            {(Object.keys(allUsers).length === 0) ?
                <div>NO HAY USUARIOS</div>
                :
                <div className="contenedor-listado-user">
                    {
                        cardsInPag.renderCards.map(u => ((!!u) &&

                            <div key={u.id} >


                                {
                                    
                                    <div className='user-card-admin' key={u.id}>
                                        <li key={u.id}> <Link to={"/user/" + u.id}>{u.name.toUpperCase()}</Link> </li>
                                        <div className='content-project-state'>
                                            <MdKeyboardArrowDown onClick={(e) => cambiarEstado(e)}/>
                                        </div>
                                    </div>
                                    
                                }

                                {
                                    desplegar === 1 ?
                                        <div className='user-desplegable-admin'>
                                            <div className='button-desplegable'><button onClick={(e) => cambiarEstadoModal(e)}>CAMBIAR ESTADO DE CUENTA</button></div>
                                        </div>
                                        : null
                                }

                            </div>
                        ))
                    }
                </div>
            }
            {
                modal === 1 ?
                    <ModalSuspendidos
                    estado = {cambiarEstadoModal}
                    />
                    : null
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
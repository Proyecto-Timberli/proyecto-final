import React, { useState, useEffect } from 'react'
import { MdPersonOff, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, adminSupendUser } from '../../../redux/actions/actionCreators'
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
       
        if (desplegar !== e) {
            setDesplegar(e)
        } else if (desplegar === e) {
            setDesplegar(0)

        }
    }

    function cambiarEstadoModal(e) {
        setModal(e)
    }

    function guardarCambios(userId, userType){
      
        dispatch(adminSupendUser(userId, userType))
        setModal(0)
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
                                            <MdKeyboardArrowDown onClick={(e) => cambiarEstado(u.id)}/>
                                        </div>
                                    </div>
                                    
                                }

                                {
                                    desplegar === u.id ?
                                        <div className='user-desplegable-admin'>
                                            <div className='button-desplegable'><button onClick={(e) => cambiarEstadoModal(u.id)}>CAMBIAR ESTADO DE CUENTA</button></div>
                                        </div>
                                        : null
                                }

                            </div>
                        ))
                    }
                </div>
            }
            {
                !!modal && modal !=0  ?
                    <ModalSuspendidos
                    estado = {guardarCambios}
                    id= {modal}
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
import React, { useState, useEffect } from 'react'
import './listadoU.css'
import { MdManageAccounts, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers,adminSupendUser } from '../../../redux/actions/actionCreators'
import ModalUser from './modalUser/ModalUser.js'
import ModalProjects from './modalProjects/ModalProjects.js'
import Paginado from '../../home/Paginado.js'

import { Link } from 'react-router-dom'



function ListadoUsers() {
    let dispatch = useDispatch()
    let allUsers = useSelector((state) => state.allUsers)
    

    const [desplegar, setDesplegar] = useState(0)
    const [modal, setModal] = useState(0)
    const [modalP, setmodalP] = useState({
        id: 0,
        name: '',
        projects: [],
    })

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
    function cambiarEstadoModalProyectos(e, name, projects) {
        setmodalP({
            id: e,
            name: name,
            projects: projects
        })
    }
    function resetEstado(){
        setmodalP({
            id:0,
            name:'',
            projects:[]
        })
    }
   
    function guardarCambios(userId, userType){
      
        dispatch(adminSupendUser(userId, userType))
        setModal(0)
        dispatch(getAllUsers());

    }

    function resetEstadoRol(){
        setModal(0)
        
    }

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])


    return (
        <div>
            <div className='arriba-contenedor-users'>
                <MdManageAccounts className='icono-title-users' />
                <h1>Listado de Usuarios</h1>
            </div>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>
            {(Object.keys(allUsers).length === 0) ?
                <div>NO HAY USUARIOS</div>
                :
                <div className="contenedor-listado-user">
                    {
                        cardsInPag.renderCards.map(u => ((!!u) &&
                            <div>
                                <div className='user-card-admin' key={u.id}>
                                    <li key={u.id}> <Link to={"/user/" + u.id}>{u.name.toUpperCase()}</Link> </li>
                                    <div className='content-project-state'>
                                        {u.userType.toUpperCase()}
                                        <MdKeyboardArrowDown onClick={(e) => cambiarEstado(u.id)} />
                                    </div>

                                </div>
                                {
                                    desplegar === u.id ?
                                        <div className='user-desplegable-admin'>
                                            <div className='button-desplegable'><button onClick={(e) => cambiarEstadoModal(u.id)}>CAMBIAR ROL</button></div>
                                            {/* <div className='button-desplegable'><button>REPORTES</button></div> */}
                                            <div className='button-desplegable'><button onClick={(e) => cambiarEstadoModalProyectos(u.id, u.name, u.projects)}>PROYECTOS</button></div>
                                            

                                        </div>
                                        : null
                                }

                            </div>
                        ))
                    }
                </div>
            }
            {
                 !!modal && modal !=0 ?
                    <ModalUser 
                    estado = {guardarCambios}
                    id= {modal}
                    reset= {resetEstadoRol}
                    />
                    : null
            }
            {
                !!modalP && modalP.id !=0 ?
                <ModalProjects 
                key={modalP.id}
                estado = {resetEstado}
                id= {modalP.id}
                nombre = {modalP.name}
                projects= {modalP.projects}
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
            <Link to="/admin" >Volver al Panel</Link>
        </div>
    )
}

export default ListadoUsers
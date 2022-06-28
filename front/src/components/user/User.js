import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { MdError } from "react-icons/md";


import {
    showLoadingInfo,
    showUserNotFound,
    showSelectedProfileSection,
    showSocialMediaLink
} from './user-helper';

import { getUserById } from '../../redux/actions/actionCreators'
import { scroll } from "../../functions";
import './User.css'
import ModalUserReport from './modalUseReport/ModalUserReport.js'
import { postReportUser } from '../../redux/actions/actionCreators'

const User = () => {
    scroll()

    // se usa para la request al back
    const { id } = useParams()
    const [paramsId, setParamsId] = useState(id)


    let reportBy = useSelector((state) => state.loggedUserId)
    let token = window.localStorage.getItem('usertoken')
    let userId = window.localStorage.getItem('userid')


    const dispatcher = useDispatch()

    const [selectedSection, setSelectedSection] = useState("about")
    const [askedForData, setAskedForData] = useState(false)

    const userData = useSelector((state) => state.userById)
    const [modalP, setmodalP] = useState({ userID: 0, })
    const [msgReport, setMsgReport] = useState("");
    function elemToButton(elem, key) {
        return <button key={key} onClick={(e) => {
            e.preventDefault()
            setSelectedSection(elem.state)
        }} className='profileContentSectionButton'>{elem.title}</button>
    }
    function cambiarEstadoModalUserReport(reporterID, userID) {
        setmodalP({
            reporterID: reporterID,
            userID: userID,

        })
    }

    function resetEstadoModal() {
        setmodalP({
            id: 0,
            userID: 0,
            reporterID: 0
        })
        setMsgReport("")
    }

    function enviarReporte(userId, userReporter, comentario) {
        dispatcher(postReportUser(userId, userReporter, comentario))
        mensajeReport()
    }

    const mensajeReport = () => {
        if (!reportBy) {
            setMsgReport("Debe estar registrado y logeado para reportar")
        } else {
            setMsgReport("Reporte exitoso")
        }
    }

    function showProfileSectionLinks() {
        let anyUserProfile = [
            {
                title: "Perfil",
                state: "about"
            },
            {
                title: "Proyectos",
                state: "projects"
            }
        ]

        let myUserProfile = [
            {
                title: "Perfil",
                state: "about"
            },
            {
                title: "Proyectos",
                state: "projects"
            },
            {
                title: "Configuración",
                state: "settings"
            }
            , {
                title: "Favoritos",
                state: "favorites"
            }
        ]

        if (userData.id === Number.parseInt(localStorage.getItem("userid"))) {
            return <div className='profileContentSections'>{myUserProfile.map(elemToButton, "myUserProfile")}</div>
        } else {
            return <div className='profileContentSections'>{anyUserProfile.map(elemToButton, "anyUserProfile")}</div>
        }
    }

    let user = window.localStorage.getItem('userid')
    console.log(user)

    function showLoadedProfile() {
        return (
            <div className='profileContainer'>
                <div className='profileInfo'>
                    <div className='user-profilePicContainer'>
                        <img src={userData.image} className='profilePic' alt="profilepic" />
                    </div>
                    <h2 className='profile-name'>{userData.name}</h2>
                    <div className='profileInfoDetails'>
                        <p>{userData.short_description}</p>
                        {showSocialMediaLink("linkedIn", userData)}
                        {showSocialMediaLink("github", userData)}
                    </div>

                   


                    {token ? 
                        userData.id != user?
                            <div className='cont-botones-acciones-user'>
                                <button className='boton-accion-detalleProject' ><MdError onClick={(e) => cambiarEstadoModalUserReport(reportBy, userData.id)} /></button>
                                {
                                    !!modalP && modalP.userID !== 0 ?
                                        <ModalUserReport
                                            key={modalP.userID}
                                            estado={enviarReporte}
                                            userID={modalP.userID}
                                            reporterID={modalP.reporterID}
                                            nombre={userData.name}
                                            reset={resetEstadoModal}
                                            msgReport={msgReport}
                                        />
                                        : null
                                }
                            </div>
                        : null
                        
                    : null 
                    }

                </div>
                <div className='profileContents'>
                    {showProfileSectionLinks()}
                    <div className='profileContentContainer'>
                        {showSelectedProfileSection(selectedSection, userData)}
                    </div>
                </div>
            </div>)
    }

    /** 
     * Lógica del componente
     */

    if (paramsId !== id) {
        setParamsId(id)
        setAskedForData(false)
    }

    // si ya pedi datos
    if (askedForData) {
        // Si hubo 404
        console.log(userData)
        if (userData.err === "not found") {
            return showUserNotFound()
            
        }
        if ( userData.userType == 'suspended' || userData.userType == 'Suspended'){
            
            return  showUserNotFound()
        }

        // si no hay user, esta cargando aun
        if (userData === {}) {
            return showLoadingInfo()
        }

        // si los datos y el param son los mismos, mostrar usuario
        if (userData.id === Number.parseInt(paramsId)) {
            return showLoadedProfile()
        }

        // y el id de usuario no es el midmo que el de la pagina...
        // hay que mandar a resetar el usuario y cargar otra vez

        if (userData.id !== Number.parseInt(paramsId)) {
            getUserById(paramsId)(dispatcher)
            return showLoadingInfo()
        }
    }

    // si no tengo datos, pido datos
    // y anotar que ya los pedi
    if (!askedForData) {
        getUserById(paramsId)(dispatcher)
        setAskedForData(true)
        return showLoadingInfo()
    }


}


export default User;
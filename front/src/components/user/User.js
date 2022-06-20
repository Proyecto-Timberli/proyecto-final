import React, { useState }  from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'


import { showLoadingInfo,
    showUserNotFound,
    showSelectedProfileSection,
    showSocialMediaLink
} from './user-helper';

import { getUserById } from '../../redux/actions/actionCreators'
import { scroll } from "../../functions";
import './User.css'


const User = () => {
    scroll()

    // se usa para la request al back
    const { id } = useParams()
    const [paramsId, setParamsId] = useState(id)



    const dispatcher = useDispatch()

    const [selectedSection, setSelectedSection] = useState("about")
    const [askedForData, setAskedForData] = useState(false)

    const userData = useSelector((state) => state.userById)

    function elemToButton (elem) {
        return <button onClick={(e) => {
            e.preventDefault()
            setSelectedSection(elem.state)
        }} className='profileContentSectionButton'>{elem.title}</button>
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
        ]

        if (userData.id === Number.parseInt(localStorage.getItem("userid"))) {
            return <div className='profileContentSections'>{myUserProfile.map(elemToButton)}</div>
        } else {
            return <div className='profileContentSections'>{anyUserProfile.map(elemToButton)}</div>
        }
    }

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
                        {showSocialMediaLink("github", userData) }
                    </div>
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
        if (userData.err === "not found") {
            return showUserNotFound()
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
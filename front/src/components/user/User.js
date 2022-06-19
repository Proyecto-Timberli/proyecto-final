import { useParams } from 'react-router'
import { useState } from 'react'
import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { getUserById } from '../../redux/actions/actionCreators'
import { useSelector, useDispatch } from 'react-redux'
import DisplayUserProjects from './displayUserProjects/displayUserProjects'
import './User.css'
import { scroll } from "../../functions";


const User = () => {
    scroll()
    // se usa para la request al back
    const { id } = useParams()

    const [paramsId, setParamsId] = useState(id)



    const dispatcher = useDispatch()

    const [selectedSection, setSelectedSection] = useState("about")
    const [askedForData, setAskedForData] = useState(false)

    const userData = useSelector((state) => state.userById)

    function showSocialMediaLink(which) {
        if (which === "github" && (userData.github !== "none" && userData.github !== null)) {
            return (<a className="profile-socialMediaLink" href={userData.github}><BsGithub /></a>)
        }
        if (which === "linkedIn" && (userData.linkedin !== "none" && userData.linkedin !== null)) {
            return (<a className="profile-socialMediaLink" href={userData.linkedin}><BsLinkedin /></a>)
        }
        return null
    }

    function showUserDescription() {
        if (userData !== {} && userData.description) {
            return (<>
                <h3>Sobre mi:</h3>
                {userData.description.split("\n\n").map((e) => { return (<p key={e} className='p-profile'>{e}</p>) })}
            </>)
        } else {
            return (<>
                <h3>Sobre mi:</h3>
                <p className='p-profile'>Este usuario no tiene descripción.</p>
            </>)
        }
    }

    function showUserStack() {
        if (userData.stack !== "none") {
            return (<>
                <h3>Stack de tecnologías:</h3>
                <p className="p-stack"> {userData.stack}</p>
            </>)
        } else {
            return (<>
                <h3>Stack de tecnologías:</h3>
                <p className="p-stack">Este usuario no ha indicado su stack.</p>
            </>)
        }
    }

    function showSelectedProfileSection() {
        if (selectedSection === "about") {
            return (
                <div className='profileContent-profileInfo'>
                    {showUserDescription()}
                    {showUserStack()}
                </div>
            )
        } else if (selectedSection === "projects") {
            return (<DisplayUserProjects projects={userData.projects} />)
        }
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
            return (
                <div className='profileContainer'>
                    <div className='profileContents'>
                        <h1>Usuario no encontrado.</h1>
                    </div>
                </div>
            )
        }

        // si no hay user, esta cargando aun
        if (userData === {}) {
            return (
                <div className='profileContainer'>
                    <div className='profileContents'>
                        <h1>Cargando...</h1>
                    </div>
                </div>
            )
        }

        // si los datos y el param son los mismos, mostrar usuario
        if (userData.id === Number.parseInt(paramsId)) {
            return (
                <div className='profileContainer'>
                    <div className='profileInfo'>
                        <img src={userData.image} className='profilePic' alt="profilepic" />

                        <h2 className='profile-name'>{userData.name} </h2>
                        <div className='profileInfoDetails'>
                            <p>{userData.rol} </p>
                            {showSocialMediaLink("linkedIn")}
                            {showSocialMediaLink("github")}
                        </div>
                    </div>
                    <div className='profileContents'>
                        <div className='profileContentSections'>
                            <h2><button onClick={(e) => {
                                e.preventDefault()
                                setSelectedSection("about")
                            }} className='profileContentSectionButton'>Perfil</button> | <button onClick={(e) => {
                                e.preventDefault()
                                setSelectedSection("projects")
                            }} className='profileContentSectionButton'>Proyectos</button></h2>
                        </div>
                        <div className='profileContentContainer'>
                            {showSelectedProfileSection()}
                        </div>
                    </div>

                </div>

            )
        }




        // y el id de usuario no es el midmo que el de la pagina...
        // hay que mandar a resetar el usuario y cargar otra vez

        if (userData.id !== Number.parseInt(paramsId)) {
            getUserById(paramsId)(dispatcher)
            return (
                <div className='profileContainer'>
                    <div className='profileContents'>
                        <h1>Cargando...</h1>
                    </div>
                </div>
            )
        }
    }



    // si no tengo datos, pido datos
    // recuerdar que ya los pedi
    if (!askedForData) {
        getUserById(paramsId)(dispatcher)
        setAskedForData(true)
        return (
            <div className='profileContainer'>
                <div className='profileContents'>
                    <h1>Cargando...</h1>
                </div>
            </div>)
    }


}


export default User
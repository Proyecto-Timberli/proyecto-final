import { useParams } from 'react-router'
import { useState } from 'react'
import React from 'react'
import { getUserById } from '../../redux/actions/actionCreators'
import { useSelector, useDispatch } from 'react-redux'
import DisplayUserProjects from './displayUserProjects/displayUserProjects'
import './User.css'

const User = () => {
    // se usa para la request al back
    const { id } = useParams()
    const dispatcher = useDispatch()

    const [selectedSection, setSelectedSection] = useState("about")
    const [askedForData, setAskedForData] = useState(false)

    const userData = useSelector((state) => state.userById)

    function showSocialMediaLink(which) {
        if (which === "github" && userData.github !== "none") {
            return (<a className="profile-socialMediaLink" href={userData.github}>Github</a>)
        }
        if (which === "linkedIn" && userData.linkedin !== "none") {
            return (<a className="profile-socialMediaLink" href={userData.linkedin}>LinkedIn</a>)
        }
        return null
    }
    
    function showUserDescription() {
        if (userData !== {} && userData.description) {
            return (<>
            <h3>Sobre mi:</h3>
            {userData.description.split("\n\n").map((e) => { return (<p>{e}</p>) })}
            </>)
        } else {
            return (<>
            <h3>Sobre mi:</h3>
            <p>Este usuario no tiene descripción.</p>
            </>)
        }  
    }

    function showUserStack() {
        if (userData.stack !== "none") {
            return (<>
            <h3>Stack de tecnologías:</h3>
            {userData.stack}
            </>)
        } else {
            return (<>
            <h3>Stack de tecnologías:</h3>
            <p>Este usuario no ha indicado su stack.</p>
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
    if (!askedForData) {
        getUserById(id)(dispatcher)
        setAskedForData(true)
        return (<h1>Cargando...</h1>)
    }

    if (userData !== []) {
        return (
            <div className='profileContainer'>
                <div className='profileInfo'>
                    <img src={userData.image}  className='profilePic' alt="profilepic" />
                    <h2>{userData.name}</h2>
                    <div className='profileInfoDetails'>
                        <p>@{userData.userName}</p>
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
            </div>)
    }
}

export default User
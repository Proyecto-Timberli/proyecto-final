//import { useParams } from 'react-router'
import { useState } from 'react'
import React from 'react'
import './User.css'

const User = () => {

    // se usa para la request al back
    // const { id } = useParams()
    const [selectedSection, setSelectedSection] = useState("about")
    const [userData, setUserData] = useState(
        { 
            loaded: true,
            userName: "Saposan",
            name: "Cristobal Herreros",
            image: "https://avatars.githubusercontent.com/u/35698291",
            linkedIn: "https://www.linkedin.com/in/crist%C3%B3bal-herreros-viviani-50122b1b7/", // link
            github: "https://github.com/Sapo-san",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor turpis ut pulvinar sodales. Aenean lectus ante, auctor non orci aliquet, mollis aliquam ante. In hac habitasse platea dictumst. Nullam vehicula eu ipsum quis auctor. Donec tellus libero, malesuada et sapien tempor, ultricies tempus ex. Nulla at metus nulla. Proin ultricies erat vel massa hendrerit rhoncus. Nam elementum vitae ex sed ultricies. Nullam ac massa ut est placerat facilisis et sed metus."
        }
    )

    function getUserData() {
        // Obtener datos desde la api con promesa
        // ...
        
        // usar este hook dentro de la promesa para setear la info obtenida.
        setUserData({ loaded: true })
    }

    function showSocialMediaLink(which) {
        if (which === "github" && userData.github !== null) {
            return (<a href={userData.github}>Github</a>)
        }
        if (which === "linkedIn" && userData.linkedIn !== null) {
            return (<a href={userData.linkedIn}>LinkedIn</a>)
        }
        
        return null
    }
    
    function showSelectedProfileSection() {
        if (selectedSection === "about") {
            return (
                <p>{userData.description}</p>
            )
        } else if (selectedSection === "projects") {
            return (<h1>Mostrar componente lista de proyectos</h1>)
        }
    }

    /** 
     * Lógica del componente
     */
    if (!userData.loaded) {
        getUserData()
        return (<h1>Cargando...</h1>)
    }

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
                    }} className='profileContentSectionButton'>Sobre mi</button> | <button onClick={(e) => {
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

export default User
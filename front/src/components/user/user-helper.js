/**
 * Funciones de ayuda para el componente User
 */

// ** Imports **
import DisplayUserProjects from './displayUserProjects/displayUserProjects'
import { BsGithub, BsLinkedin } from "react-icons/bs";

// ** Funciones **

export function showLoadingInfo() {
    return (
        <div className='profileContainer'>
            <div className='profileContents'>
                <h1>Cargando...</h1>
            </div>
        </div>)
}

export function showUserNotFound() {
    return (
        <div className='profileContainer'>
            <div className='profileContents'>
                <h1>Usuario no encontrado.</h1>
            </div>
        </div>
        )
}

function showUserDescription(userData) {
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

function showUserStack(stack) {
    if (stack !== "none" && stack !== null) {
        return (<>
            <h3>Stack de tecnologías:</h3>
            <p className="p-stack"> {stack}</p>
        </>)
    } else {
        return (<>
            <h3>Stack de tecnologías:</h3>
            <p className="p-stack">Este usuario no ha indicado su stack.</p>
        </>)
    }
}

export function showSelectedProfileSection(selectedSection, userData) {
    if (selectedSection === "about") {
        return (
            <div className='profileContent-profileInfo'>
                {showUserDescription(userData)}
                {showUserStack(userData.stack)}
            </div>
        )
    } else if (selectedSection === "projects") {
        return (<DisplayUserProjects projects={userData.projects} />)
    }
}

export function showSocialMediaLink(which, userData) {
    if (which === "github" && (userData.github !== "none" && userData.github !== null )) {
        return (<a className="profile-socialMediaLink" href={userData.github}><BsGithub /></a>)
    }
    if (which === "linkedIn" && (userData.linkedin !== "none" && userData.linkedin !== null )) {
        return (<a className="profile-socialMediaLink" href={userData.linkedin}><BsLinkedin /></a>)
    }
    return null
}
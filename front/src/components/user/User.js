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
    
    function showUserStack() {
        if (userData.stack !== "none") {
            return (<>
            <h3>Stack de tecnologías</h3>
            {userData.stack}
            </>)
        } else {
            return (<></>)
        }
    }

    function showSelectedProfileSection() {
        if (selectedSection === "about") {
            return (
                <div className='profileContent-profileInfo'>
                    <h2>Sobre mí:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim tellus accumsan, posuere leo non, ullamcorper enim. Fusce commodo lacinia commodo. Etiam porta accumsan eros et ornare. Maecenas id consectetur est. Quisque mauris dui, ultricies id finibus ac, eleifend malesuada erat. In hac habitasse platea dictumst. Praesent diam arcu, condimentum sed metus elementum, imperdiet pulvinar erat. Cras efficitur euismod dolor. Nam vitae porttitor turpis. Pellentesque pretium cursus efficitur. Cras tincidunt, ipsum vestibulum bibendum sagittis, ex libero ultricies metus, ac imperdiet velit purus vel ante. Sed ac magna laoreet, tempus diam non, feugiat dolor. Nullam fringilla nibh non nisl pharetra pretium. Aliquam id quam pellentesque, porta sapien eget, tincidunt dui. Sed odio tellus, sagittis ac lobortis sed, scelerisque vel massa. Nulla tempus odio nec lorem sagittis, sed faucibus lectus cursus.</p>
                    <p>Vivamus dictum ut nunc id interdum. Pellentesque tincidunt in quam a ullamcorper. Ut metus ligula, varius facilisis diam at, vulputate tempus augue. Suspendisse congue orci massa, ut aliquam ligula fermentum nec. Proin at auctor est. Sed a eros at elit vehicula convallis. Vivamus a tellus suscipit, vehicula purus at, luctus mauris. Cras lectus urna, consectetur quis vestibulum aliquet, lobortis eu quam. Nam fermentum sit amet lorem non eleifend. Phasellus et odio purus. Morbi posuere mauris nec felis vestibulum mattis.</p>
                    <p>Quisque feugiat massa vel velit molestie, eu dictum purus imperdiet. Nulla consequat ex eget metus condimentum eleifend. Duis dapibus fringilla mauris, ut mollis eros suscipit eget. Suspendisse diam turpis, efficitur id imperdiet ut, volutpat vel sem. Curabitur accumsan at felis ac pellentesque. Nulla nec ex et magna pulvinar lacinia. Duis dapibus nulla nec magna tempus, eu dignissim nisl commodo. Ut mollis molestie lacus, sit amet egestas magna iaculis id. Maecenas molestie malesuada pellentesque. In fermentum quam imperdiet egestas efficitur. Nunc eu volutpat ante, ut tempor elit</p>
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

    if (askedForData && userData.id !== Number.parseInt(id)) {
        return (
            <div className='profileContainer'>
                <div className='profileContents'>
                    <h1>Usuario no encontrado.</h1>    
                </div>
            </div>
        )
    }

    if (askedForData && userData.id === Number.parseInt(id)) {
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
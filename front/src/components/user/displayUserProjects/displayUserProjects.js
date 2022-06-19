import React from 'react'
import './displayUserProjects.css'
import MiniCard from './miniCard/miniCard'

const DisplayUserProjects = ({ projects }) => {

    function displayProjects() {
        return projects.map((p) => {
            return (
                <MiniCard key={p.id} imagen={p.imagen[0]} id={p.id} name={p.name} description={p.shortDescription} />
            )
        })
    }
    return (
        <div className="userProjectsContainer">
            {displayProjects()}
        </div>
    )
}

export default DisplayUserProjects
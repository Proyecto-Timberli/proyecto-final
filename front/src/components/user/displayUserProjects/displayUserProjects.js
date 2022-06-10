import React from 'react'
import './displayUserProjetcs.css'
import Card from '../../home/card/Card';

const DisplayUserProjects = ({ projects }) => {

    function displayProjects() {
        return projects.map((p) => {
            return (
                <Card key={p.id}/>
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
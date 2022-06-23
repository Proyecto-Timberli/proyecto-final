import React, { useState } from 'react';
import "./modal.css"
import { technologies } from './technologies.js'

const ModalTechnologies = ({ estado, id, reset }) => {


    const [valor, setValor] = useState([])
    const addTechs=(tech)=>{
        setValor([
            ...valor,tech
        ])
    }
    
    return (
        <div className='modal'>

            <div className='modal-contenido'>
                <h1>Seleccionar Tecnologias</h1>
                
                {technologies && technologies.map(tech => 
                <div key={tech.name}>
                {valor.includes(tech.name)&&<button class="techs-press-button"onClick = {()=> addTechs(tech.name)}>{tech.name}</button>}
                {!valor.includes(tech.name)&&<button class="techs-button"onClick = {()=> addTechs(tech.name)}>{tech.name}</button>}
                </div>
                )}                      
            </div>
        </div>
    );
}

export default ModalUser;
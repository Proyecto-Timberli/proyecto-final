import React, { useState, useEffect } from 'react';
import { technologies } from './technologies.js'
import "./modal.css"
const ModalTechnologies = ({techs,funcionSet,desplegar}) => {
    const addTechs=(tech)=>{
        let existeTech = techs.some(t => t === tech)
        if(!existeTech){
            funcionSet([
                ...techs,tech
            ])
        }else{
            funcionSet(techs.filter((t)=>t !== tech))
        }
    }
    const cerrar = (e)=>{
        desplegar(false)
    }
    return (
        <div className='modal-tech'>
            <div className='modal-tech-contenido'>
                <h1 className='techs-title'>Seleccione sus Tecnologias</h1>    
                <div className ="techs-div-button">     
                    {technologies && technologies.map(tech => 
                    <div key={tech.name}>
                        {techs.includes(tech.name)&&<button className="techs-button techs-press-button"onClick = {()=> addTechs(tech.name)}>{tech.name}</button>}
                        {!techs.includes(tech.name)&&<button className="techs-button"onClick = {()=> addTechs(tech.name)}>{tech.name}</button>}
                    </div>
                    )} 
                </div>   
                <div>
                    <div className="tech-button-listo" onClick={()=> cerrar()}>Listo</div>
                </div>                      
            </div>
        </div>
    );
}

export default ModalTechnologies;
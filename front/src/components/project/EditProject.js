
import React, { useEffect, useState } from 'react'
import { AiOutlineSave } from "react-icons/ai";
import { useDispatch} from "react-redux";
import { putProjectById,getProjectById} from '../../redux/actions/actionCreators'
import './EditProject.css'
import { technologies } from '../home/newProject/technologies.js';
import validate from './validacion'
import { FcDataConfiguration } from "react-icons/fc";

function EditProject({id,defaultValue,desplegarEditar}) {
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////
    let dispatch = useDispatch()
    const [editValue,setEditValue] = useState({
        name:defaultValue.name,
        tecnology: defaultValue.tecnology,
        shortDescription: defaultValue.shortDescription,
        description: defaultValue.description,
        imagen: defaultValue.imagen,
        repository: defaultValue.repository,
        deploying: defaultValue.deploying,
    })
    const [noSave,setNoSave] = useState(false)
    // useEffect(() => {   

    // }, [editValue])         
    const saveEdit = async ()=>{
        if (!Object.keys(validate(editValue)).length){
            await putProjectById(id,editValue)
            dispatch(getProjectById(id))
            desplegarEditar(false)
        }else{
            setNoSave(true)
        }
    }
    const addTechs=(tech)=>{
        let existeTech = editValue.tecnology.some(t => t === tech)
        if(!existeTech){
            setEditValue({
                ...editValue,
                tecnology:[...editValue.tecnology,tech]
            })    
        }else{         
            setEditValue({
                ...editValue,
                tecnology:editValue.tecnology.filter((t)=>t !== tech)
            })
        }
    }
    const chageValueProyect=(e)=>{        
        setEditValue({
            ...editValue,
            [e.target.name]:e.target.value,
        })        
    }   
    function handleInputImage(e) {
        e.preventDefault()
        setEditValue({
            ...editValue,
            [e.target.imagen]:[...e.target.imagen,e.target.files]
        })  
    }

    // function deletePhoto(e) {
    //     let indexInput = e.target.id * 1;
    //     setImagen(Imagen.filter((photo, index) => {
    //         return index !== indexInput ? photo : false
    //     }))

    // } 
    return (
        <React.Fragment>
            <div className ="project-edit-container">   
                <div className ="project-bar" onClick={()=>{desplegarEditar(false)}}>Proyecto</div><div className ="project-bar"><FcDataConfiguration/>Configuracion</div>
                <div className ="project-bar" onClick={()=>{saveEdit()}}><AiOutlineSave />Guardar Cambios</div>
                <div className ="project-edit-div-nombre">
                    <div className ="project-edit-div-white-name">
                        <h3>Nombre</h3>
                        {validate(editValue).name&&<p className="project-edit-error-name">{validate(editValue).name}</p>}
                        <input onChange={chageValueProyect} name="name"className ="project-edit-input"value={editValue.name}/>
                    </div>
                </div>           
                <div className ="project-edit-div-description project-edit-div-white">
                        
                        <div>
                        {validate(editValue).description&&<p className="project-edit-error-description">{validate(editValue).description}</p>}
                            <h3>Descripcion</h3><textarea onChange={chageValueProyect} name="description"className ="project-edit-textarea-description project-edit-input"value={editValue.description}/>
                        </div>
                       
                        <div>
                            {validate(editValue).shortDescription&&<p className="project-edit-error-description">{validate(editValue).shortDescription}</p>}
                            <h3>Descripcion corta</h3><textarea onChange={chageValueProyect} name="shortDescription"className ="project-edit-textarea-shortdescription project-edit-input"value={editValue.shortDescription}/>
                        </div>
                </div>                                                
                <div className ="project-edit-div-tecnologias">    
                    <div className ="project-edit-div-white">                                      
                        <h3 className='techs-title'>Sus Tecnologias</h3>                             
                        {validate(editValue).tecnology&&<p className="project-edit-error-tecnologias">{validate(editValue).tecnology}</p>}
                        <div className ="techs-div-button">     
                            {technologies && technologies.map(tech => 
                            <div key={tech.name}>
                                {editValue.tecnology.includes(tech.name)&&<button className="techs-button techs-press-button"onClick = {()=> addTechs(tech.name)}>{tech.name}</button>}
                                {!editValue.tecnology.includes(tech.name)&&<button className="techs-button"onClick = {()=> addTechs(tech.name)}>{tech.name}</button>}
                            </div>
                            )} 
                        </div>
                    </div>
                        <div className ="project-edit-div-white">   
                            <div className ="project-edit-div-multimedia"><h3>Imagenes y video</h3><input type="file" onChange={handleInputImage} name="imagen"className ="project-edit-input"/></div>
                        </div>                                                                                                                                  
                </div>                                           
                    <div className ="project-edit-div-link-1"><h3>Link de Repositorio</h3><input onChange={chageValueProyect} name="repository"className ="project-edit-input"value={editValue.repository}/></div>                       
                    <div className ="project-edit-div-link-2"><h3>Link de Deploy</h3><input onChange={chageValueProyect} name="deploying"className ="project-edit-input"value={editValue.deploying}/></div>                                                           
            </div>
            {noSave&&<p className="project-edit-error">Complete de forma correcta los campos y opciones</p>}
            <div className ="project-bar" onClick={()=>{saveEdit()}}><AiOutlineSave />Guardar Cambios</div>
        </React.Fragment >
    )
}
export default EditProject





// <div id="imagen"></div>
// {Imagen[0] ? (
//     <div className={styles.containerImagesPreview} >
//         {Imagen.map((e, index) => {
//             console.log(e)
//             if (e.type.split('/')[0] === 'image') {

//                 return (
//                     <img
//                         className={styles.imagePreview}
//                         key={index}
//                         src={URL.createObjectURL(e)}
//                         id={index}
//                         alt=""
//                         onClick={e => deletePhoto(e)} />
//                 )
//             } else {
//                 return (
//                     <video
//                         className={styles.imagePreview}
//                         key={index}
//                         src={URL.createObjectURL(e)}
//                         id={index}
//                         alt=""
//                         autoPlay={true}
//                         onClick={e => deletePhoto(e)} />
//                 )
//             }
//         })}
//     </div>
// ) : <div className={styles.divImage}>
//     You currently have no photos added
// </div>}

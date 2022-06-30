import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './project.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, getFavorites, getProjectById, postReportProject } from '../../redux/actions/actionCreators'
import Paginado from './paginado-imagenes.js'
import Cargando from '../componentesGenerales/cargando/cargando';
import Page404 from '../componentesGenerales/Page404/Page404';
import { scroll } from "../../functions";
import Reviews from './reviews/reviews';
import ModalReport from './modalReport/ModalReport.js'
import { MdFavorite, MdError,MdFavoriteBorder } from "react-icons/md";
import { addFavorites } from '../../redux/actions/actionCreators';
import EditProject from './EditProject.js'
import { FcDataConfiguration } from "react-icons/fc";

function Project() {
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////
    const { id } = useParams();
    let dispatch = useDispatch()
    let listUserFavorites = useSelector((state) => state.listFavorites)
    let userId = window.localStorage.getItem('userid')
    let token = window.localStorage.getItem('usertoken')
    const project = useSelector((state) => state.projectById)
    let reportBy = useSelector((state) => state.loggedUserId)
    const [desplegarEditar, setDesplegarEditar] = useState(false);
    
    useEffect(() => {
        dispatch(getProjectById(id))
        if (token) {
            dispatch(getFavorites({ userId: window.localStorage.getItem("userid") * 1 }))
        }
        scroll()
        console.log(userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // useEffect(() => {
    //     scroll()
    // }, [desplegarEditar])

    ////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////paginado imagenes/////////////////////////////////////
    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });


    const paginado = new Paginado(1, project.imagen, cardsInPag.pag, null, "Any", 1)
    const accionarPaginado = (selectPag, selectFilter) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag, selectFilter)
        })
    }
    useEffect(() => {
        if (Object.keys(project).length && project.imagen.length) {
            accionarPaginado(1)
        }
        console.log(project)
        console.log(userId)
        console.log(project.userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project])
    ////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////Report///////////////////////////////////////////////////////////////////
    // postReportProject(jectId:1,reportedBy:1,reportComment:"posteo un proyecto con insultos"})
    // postReportUser({userId:2,reportedBy:1,reportComment:"realizo comentario racistas"})


    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////

    const [loading, setLoading] = useState(true);
    const [msgReport, setMsgReport] = useState("");
    const [modalP, setmodalP] = useState({
        userID: 0,
        projectID: 0,
    })
   
    function cambiarEstadoModalReport(userID, projectID) {
        setmodalP({
            userID: userID,
            projectID: projectID
        })
    }

    function resetEstadoModal() {
        setmodalP({
            id: 0,
            userID: 0,
            projectID: 0,
        })
        setMsgReport("")
    }

    async function enviarReporte(proyectId, userId, comentario) {
        dispatch(postReportProject(proyectId, userId, comentario))
        //  resetEstadoModal()
        mensajeReport()
    }

    if (!Object.keys(project).length) {
        if (loading) {
            setTimeout(() => { setLoading(false) }, 5000)
            return <Cargando />
        }
        return <Page404 />

    }

    const mensajeReport = () => {
        if (!reportBy) {
            setMsgReport("Debe estar registrado y logeado para reportar")
        } else {
            setMsgReport("Reporte exitoso")
        }

    }
    async function AñadirFavorite() {
        console.log({userId}," sssssssssssssssssssssssssssssssssss")  
        await addFavorites(userId, id)
        dispatch(getFavorites( {userId} ))

    }
    async function EliminarFavorite() {
        await deleteFavorite(userId, id)
        dispatch(getFavorites( {userId} ))
    }
   
 
    if (desplegarEditar){
        return (
            <React.Fragment>             
                <EditProject
                    id={id}
                    defaultValue={project}
                    desplegarEditar={setDesplegarEditar}
                /> 
            </React.Fragment>   
        )
    }

    console.log(project.user.id)
    console.log(userId)

    return (

        <React.Fragment>
            <div className='detail-container'>
                {(userId==project.userId)&&
                <div className="project-bar-container">
                    <div className ="project-bar" onClick={()=>{desplegarEditar(false)}}>Proyecto</div>
                    <div className ="project-bar"onClick={()=>{setDesplegarEditar(true)}}><FcDataConfiguration/>Configuracion</div>
                </div>}

                <div className='project-title-container'><h2 className='project-title'>{project.name}</h2></div>
                <div className='Contenedor-detalles'>
                    <div className='cont-info'>
                        <div >
                            <h3>Usuario:</h3>
                            <Link to={"/user/" + project.userId} style={{'text-decoration':'none'}}>
                                <div className='info-detalle' >{project.user.name}</div>
                            </Link>
                        </div>
                        <div >
                            <h3>Deploy:</h3>
                            {project.deploying === "none" || project.deploying === "" ? <div className='info-detalle-null'>Sin Deploy</div> : <div className='info-detalle-link' ><a target="_blank" href={project.deploying} rel="noopener noreferrer"> Link Deploy</a></div>}

                        </div>
                        {/* GitHub */}
                        <div>
                            <h3>GitHub:</h3>
                            {project.repository === "none" || project.repository === "" ? <div className='info-detalle-null'>Sin GitHub</div> : <div className='info-detalle-link' ><a target="_blank" href={project.repository} rel="noopener noreferrer"> Link GitHub</a></div>}
                        </div>
                    </div >

                    <div className='cont-img-detalle'>
                        {cardsInPag.renderCards.map(image => (!!image) &&
                            image.includes(".mp4") ?

                            <video
                                className='card-video-detalle'
                                src={image}
                                autoPlay={true}
                                loop={true}
                                controls={true}
                                key={image}
                            ></video>
                            :

                            <img alt='Foto' key={image} className='card-img-detalle' src={image}></img>
                        )}
                        <div className="project-paginado-button-container">
                            {paginado.buttons().map(button =>
                                <div key={button}>
                                    {cardsInPag.pag !== button && <button className="project-paginado-button" onClick={() => accionarPaginado(button)}></button>}
                                    {cardsInPag.pag === button && <button className="project-paginado-button-select" onClick={() => accionarPaginado(button)}></button>}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='cont-info'>
                        <div className='cont-botones-acciones'>

                            {
                                !listUserFavorites.projects?.find(p => p.id === project?.id) ?
                                    !listUserFavorites.favorites?.find(favorito => favorito.projects[0]?.id === project?.id) ?

                                        <>
                                            <ul className='wrapper'>
                                                <li className='icon facebook'>
                                                    <span className='tooltip'>{token ? "Agregar a Favoritos" : "logeate para agregar a favoritos"}</span>
                                                    <button className='boton-accion-detalleProject' disabled={!token} onClick={() => AñadirFavorite()}> <MdFavoriteBorder /></button>
                                                </li>
                                            </ul>
                                        </>
                                        :
                                        <>
                                            <ul className='wrapper'>
                                                <li className='icon facebook'>

                                                    <span className='tooltip'>Borrar de Favoritos</span>
                                                    <button className='boton-accion-detalleProject' onClick={() => EliminarFavorite()}> <MdFavorite /></button>
                                                </li>
                                            </ul>
                                        </>
                                    : null

                            }
                            {token? 
                                userId != project.user.id ?
                                    <button className='boton-accion-detalleProject' ><MdError onClick={(e) => cambiarEstadoModalReport(reportBy, project.id)} /></button>
                                    :null
                                :null
                            }
                        </div>
                        <div>
                            <h3>Puntuacion:</h3>
                            {!project.scoreStyle[0] && !project.scoreFunctionality[0] && !project.scoreOriginality[0] ?
                                <div className='info-detalle-user'>
                                    <p>Este proyecto todavia no tiene puntuación</p>
                                </div>
                            :
                                <div className='info-detalle-user'>
                                    <p>Diseño: {project.scoreStyle[0] && (project.scoreStyle.reduce((e, a) => Number(e) + Number(a)) / project.scoreStyle.length).toFixed(2)} </p> 
                                    <p>Funcionalidad: {project.scoreFunctionality[0] && (project.scoreFunctionality.reduce((e, a) => Number(e) + Number(a)) / project.scoreFunctionality.length).toFixed(2)} </p> 
                                    <p>Originalidad: {project.scoreOriginality[0] && (project.scoreOriginality.reduce((e, a) => Number(e) + Number(a)) / project.scoreOriginality.length).toFixed(2)}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div >
                {/*DESCRIPTION */}
                < div >
                    <div className='desc-detalle'>
                        <h3 >Descripcion:</h3>
                        <div>
                            <p className="text2">{project.description}</p>
                        </div>
                        <h3>Tecnologias:</h3>
                        <div>

                            <p className="text2">| {project.tecnology?.map((t) => t + ' | ')}</p>
                        </div>
                    </div>
                </div >
                <div>
                    <Reviews
                        reviews={project.reviews}
                        projectid={project.id}
                        idUser={project.user.id} />
                </div>
                {
                    !!modalP && modalP.projectID !== 0 ?
                        <ModalReport
                            key={modalP.projectID}
                            estado={enviarReporte}
                            userID={modalP.userID}
                            projectID={modalP.projectID}
                            nombre={project.name}
                            reset={resetEstadoModal}
                            msgReport={msgReport}
                        />
                        : null
                }
            </div >
        </React.Fragment >
    )
}

export default Project
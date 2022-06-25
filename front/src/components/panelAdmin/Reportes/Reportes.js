import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { MdError, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom'
import { getAllProjects, getAllUsers } from '../../../redux/actions/actionCreators.js'
import Project from '../../project/Project.js';
import Paginado from '../../home/Paginado.js'
import './reportes.css'
function Reportes() {
  let dispatch = useDispatch()

  let allProjects = useSelector((state) => state.allProject)
  let projectsFilter = allProjects.filter(
    project => project.reports.length === 0 ? null : project.reports)

  let allUsers = useSelector((state) => state.allUsers)
  let usersFilter = allUsers.filter(user => user.reports.length === 0 ? null : user.reports)


  useEffect(() => {
    dispatch(getAllProjects())
    dispatch(getAllUsers())
  }, [])

  const [cardsInPag, setCardsInPag] = useState({
    renderCards: [],
    pag: 1,
  });
  const paginado = new Paginado(9, projectsFilter, cardsInPag.pag, null, "Any", 1)
  const accionarPaginado = (selectPag, selectFilter) => {
    setCardsInPag({
      ...cardsInPag,
      ...paginado.paginar(selectPag, selectFilter)
    })
  }
  const [cardsInPagUsers, setCardsInPagUsers] = useState({
    renderCards: [],
    pag: 1,
  });
  const paginadoUsers = new Paginado(9, usersFilter, cardsInPagUsers.pag, null, "Any", 1)
  const accionarPaginadoUsers = (selectPag, selectFilter) => {
    setCardsInPagUsers({
      ...cardsInPagUsers,
      ...paginadoUsers.paginar(selectPag, selectFilter)
    })
  }

  useEffect(() => {
    if (projectsFilter.length) {
      accionarPaginado(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProjects])

  useEffect(() => {
    if (usersFilter.length) {
      accionarPaginadoUsers(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allUsers])

  return (
    <div className='contenedor-total-reportes'>
      <div className='arriba-contenedor-users'>
        <MdError className='icono-title-users' />
        <h1>Proyectos y Usuarios Reportados</h1>
      </div>
      <Link className='volver-admin' to='/admin'> Volver al Panel</Link>
      <div className='contenedor-reportes'>
        <div className='contenedor-reportes-proyectos'>
          <h3>PROYECTOS </h3>
          {(Object.keys(projectsFilter).length === 0)

            ? <div> No hay proyectos reportados</div>
            : <div className='contenedor-listado-project'>
              {
                cardsInPag.renderCards.map(p => ((!!p) &&
                  <div className='project-card-admin' key={p.id}>
                    <li key={p.id}><b>{p.id}</b> -   <Link to={"/project/" + p.id}>{p.name}</Link> </li>
                    <div>
                      <p>{p.reports.length}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          }
           <div>
        {paginado.buttons().map(button =>
          <div className="container-paginado" key={button}>
            {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginado(button)}>{button}</button>}
            {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginado(button)}>{button}</button>}
          </div>
        )}
      </div>
        </div>
        <div className='contenedor-reportes-proyectos'>
          <h3>USUARIOS </h3>

          {(Object.keys(usersFilter).length === 0)

            ? <div> No hay usuarios reportados</div>
            : <div className='contenedor-listado-project'>
              {
                cardsInPagUsers.renderCards.map(p => ((!!p) &&
                  <div className='project-card-admin' key={p.id}>
                    <li key={p.id}><b>{p.id}</b> -   <Link to={"/project/" + p.id}>{p.name}</Link> </li>
                    <div>
                      <p>{p.reports.length}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          }
           <div>
        {paginado.buttons().map(button =>
          <div className="container-paginado" key={button}>
            {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginadoUsers(button)}>{button}</button>}
            {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginadoUsers(button)}>{button}</button>}
          </div>
        )}
      </div>
        </div>
      </div>



    </div>
  )
}

export default Reportes
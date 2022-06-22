import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { MdError, MdKeyboardArrowDown } from "react-icons/md";
import {Link} from 'react-router-dom'
import { getAllProjects } from '../../../redux/actions/actionCreators.js'
import Project from '../../project/Project.js';

function Reportes() {
  let dispatch = useDispatch()
  let allProjects = useSelector((state) => state.allProject)
  allProjects.filter(project => project.Report === 1)
  

  useEffect(() => {
    dispatch(getAllProjects())
    
  }, [])

  return (
    <div>
      <div className='arriba-contenedor-users'>
        <MdError className='icono-title-users' />
        <h1>Listado de Reportes</h1>
      </div>
      <Link className='volver-admin' to='/admin'> Volver al Panel</Link>

    {(Object.keys(allProjects).length===0)
  ? <div> NO HAY REPORTES </div>
  : <div>Hay reportes</div>  
  }
    </div>
  )
}

export default Reportes
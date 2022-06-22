import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { MdError, MdKeyboardArrowDown } from "react-icons/md";
import {Link} from 'react-router-dom'
// import {} from '../../../redux/actions/actionCreators.js'

function Reportes() {
  let dispatch = useDispatch()
  let userReports = useSelector((state) => state.reportsUsers)
  let projectReports = useSelector((state) => state.reportsProjects)

  useEffect(() => {
    // dispatch(getReportsUsers())
    // dispatch(getReportsProjects())
  }, [])

  return (
    <div>
      <div className='arriba-contenedor-users'>
        <MdError className='icono-title-users' />
        <h1>Listado de Reportes</h1>
      </div>
      <Link className='volver-admin' to='/admin'> Volver al Panel</Link>

    {(Object.keys(userReports).length ===0 )&& (Object.keys(projectReports).length===0)
  ? <div> NO HAY REPORTES </div>
  : <div>Hay reportes</div>  
  }
    </div>
  )
}

export default Reportes
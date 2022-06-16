import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { MdSupervisedUserCircle,MdPaid,MdNotificationImportant,MdWork,MdRemoveCircle,MdInsertChart } from "react-icons/md";
import './home-admin.css'
function Home() {
  return (
    <div>
        <div className='arriba-cont'>
            <RiAdminFill className='icono-admin'/>
            <h2>Admin</h2>
        </div>

        <div className='features-cont'>
            <div className='feature-box'>
                <MdSupervisedUserCircle className='icon-feature-admin'/>
                <h5 className='title-feature-admin'>Ver Listado de Users</h5>
            </div>
            <div className='feature-box'>
            <MdWork className='icon-feature-admin'/>
                <h5 className='title-feature-admin'>Ver Listado de Proyectos</h5>
            </div>
            <div className='feature-box'>
            <MdPaid className='icon-feature-admin'/>
                <h5 className='title-feature-admin'>Ver Listado de Contribuciones</h5>
            </div>
            <div className='feature-box'>
            <MdRemoveCircle className='icon-feature-admin'/>
                <h5 className='title-feature-admin'>Ver Listado de Suspendidos</h5>
            </div>
            <div className='feature-box'>
            <MdNotificationImportant className='icon-feature-admin'/>
                <h5 className='title-feature-admin'>Notificaciones</h5>
            </div>
            <div className='feature-box'>
            <MdInsertChart className='icon-feature-admin'/>
                <h5 className='title-feature-admin'>Estadísticas</h5>
            </div>
        </div>
    </div>
  )
}

export default Home
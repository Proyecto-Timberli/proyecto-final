import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { MdSupervisedUserCircle, MdPaid, MdNotificationImportant, MdWork, MdRemoveCircle, MdInsertChart } from "react-icons/md";
import './home-admin.css'
import { scroll } from '../../../functions';
function Home() {
    scroll()
    return (
        <div>
            <div className='arriba-cont'>
                <RiAdminFill className='icono-admin' />
                <h2>Admin</h2>
            </div>

            <div className='features-cont'>
                <div className='feature-box'>
                    <MdSupervisedUserCircle className='icon-feature-admin' />
                    <Link className='link-home-admin' to='/listadoUsers'>

                        <h5 className='title-feature-admin'>Ver Listado de Users</h5>
                    </Link>
                </div>
                <div className='feature-box'>
                    <MdWork className='icon-feature-admin' />
                    <Link className='link-home-admin' to='/listadoProjects'  >
                        <h5 className='title-feature-admin'>Ver Listado de Proyectos</h5>
                    </Link>
                </div>
                <div className='feature-box'>
                    <MdPaid className='icon-feature-admin' />
                    <h5 className='title-feature-admin'>Ver Listado de Contribuciones</h5>
                </div>
                <div className='feature-box'>
                    <MdRemoveCircle className='icon-feature-admin' />
                    <h5 className='title-feature-admin'>Ver Listado de Suspendidos</h5>
                </div>
                <div className='feature-box'>
                    <MdNotificationImportant className='icon-feature-admin' />
                    <h5 className='title-feature-admin'>Notificaciones</h5>
                </div>
                <div className='feature-box'>
                    <MdInsertChart className='icon-feature-admin' />
                    <Link className='link-home-admin' to="/admin/stats">
                        <h5 className='title-feature-admin'>Estadísticas</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
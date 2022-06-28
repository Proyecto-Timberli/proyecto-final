import React, {useEffect} from 'react'
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { MdSupervisedUserCircle, MdPaid, MdNotificationImportant, MdWork, MdRemoveCircle, MdInsertChart } from "react-icons/md";
import './home-admin.css'
import { scroll } from '../../../functions';
import { isAdmin } from '../../../redux/actions/actionCreators.js'
import {useDispatch, useSelector} from 'react-redux';
import Page404 from '../../componentesGenerales/Page404/Page404.js'

function Home() {
    scroll()

    const dispatch = useDispatch()
    const admin = useSelector(state => state.isAdmin)

    useEffect(() => {
        dispatch(isAdmin())
    }, [dispatch])

    return (
        <div className='admin-container'>
            {admin ?
            <div>
                <div className='arriba-cont'>
                    <RiAdminFill className='icono-admin' />
                    <h2 className='title-admin-home'>ADMIN</h2>
                </div>


                <div className='features-cont'>
                    <div className='feature-box'>
                        <MdSupervisedUserCircle className='icon-feature-admin' />
                        <Link className='link-home-admin' to='/admin/listadoUsers'>

                            <h5 className='title-feature-admin'>Listado de Users</h5>
                        </Link>
                    </div>
                    <div className='feature-box'>
                        <MdWork className='icon-feature-admin' />
                        <Link className='link-home-admin' to='/admin/listadoProjects'  >
                            <h5 className='title-feature-admin'>Listado de Proyectos</h5>
                        </Link>
                    </div>
                    <div className='feature-box'>
                        <MdPaid className='icon-feature-admin' />
                        <Link className='link-home-admin' to='/admin/contribuciones'  >
                            <h5 className='title-feature-admin'>Listado de Contribuciones</h5>
                        </Link>
                    </div>
                    <div className='feature-box'>
                        <MdRemoveCircle className='icon-feature-admin' />
                        <Link className='link-home-admin' to='/admin/listadoSuspendidos'>
                            <h5 className='title-feature-admin'>Listado de Suspendidos</h5>
                        </Link>
                    </div>
                    <div className='feature-box'>
                        <MdNotificationImportant className='icon-feature-admin' />
                        <Link className='link-home-admin' to='/admin/reportes'>
                            <h5 className='title-feature-admin'>Reportes</h5>
                        </Link>

                    </div>
                    <div className='feature-box'>
                        <MdInsertChart className='icon-feature-admin' />
                        <Link className='link-home-admin' to="/admin/stats">
                            <h5 className='title-feature-admin'>Estadísticas</h5>
                        </Link>
                    </div>
                </div>
            </div>
            : 
            <div>
                <h2> Usuario no autorizado </h2>
                <Page404/>
            </div>
        }
        </div>
    )
}

export default Home
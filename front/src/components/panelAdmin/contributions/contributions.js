import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getContributions } from '../../../redux/actions/actionCreators'
import "./contribution.css"

const Contributions = () => {
    let dispatch = useDispatch()
    let contribuciones = useSelector(state => state.contributions)

    useEffect(() => {
        dispatch(getContributions())

    }, [])
    console.log(contribuciones);
    return (
        <div className='cont-cont-general'>


            <h1>
                Listado de Contribuidores
            </h1>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>
            <div className='contribuciones-cont'>

                {contribuciones.map(e =>
                    <div className='contribuciones-card' key={e.id}>
                        <label>Contribucion: {e.id} </label>
                        <div>Contribuidor: {e.name} </div>

                    </div>
                )}
            </div>
        </div >
    );
}

export default Contributions;
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
    }, [dispatch])

    return (
        <div className='cont-cont-general'>
            <h1>
                CONTRIBUCIONES
            </h1>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>
            
            <div className='contribuciones-container'>
                <table>
                    <tr className='table-header'>
                        <th className='columna-header'>Numero de contribucion</th>
                        <th className='columna-header'>Id usuario</th>
                        <th className='columna-header'>Nombre de contribuidor</th>
                        <th className='columna-header'>Cantidad contribuida</th>
                    </tr>
                    {contribuciones.map(e =>
                        <tr>
                            <td className='columna-contribucion'> # {e.id} </td>
                            {e.userId ? <td className='columna-contribucion'> {e.userId}</td> : <td className='columna-contribucion'> No tiene </td>}
                            <td className='columna-contribucion'> {e.name} </td>
                            <td className='columna-contribucion'> {e.amount} U$D </td>
                        </tr>
                    )}
                </table>
            </div>

        </div>
    );
}


export default Contributions;
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState, } from "react"
import React from 'react';
import "../home/home.css"
import { ordenamiento } from "../../functions";
import { orderProjectsBy } from "../../redux/actions/actionCreators";


export default function Orders() {
  let allProjects = useSelector((state) => state.allProject)
  let arrayAmostrar = [...allProjects]

  let dispatch = useDispatch()
  ////////////////////////////////////////////////////////////////////////////////////
  const [orderPress, setOrderPress] = useState({ atribute: "id", direccion: "asc" });
  const changeOrder = (e) => {

    setOrderPress({
      ...orderPress,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {

    arrayAmostrar = ordenamiento(allProjects, orderPress.atribute, orderPress.direccion)
    dispatch(orderProjectsBy(arrayAmostrar))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderPress])


  ////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <React.Fragment>
      Ordenar por:
      <div>
        <select name={"atribute"} className="home-select" onChange={(e) => changeOrder(e)}>
          <option name={"atribute"} value={"id"} >Fecha</option>
          <option name={"atribute"} value={"name"} >Alfabeto</option>
          <option name={"atribute"} value={"scoreAverage"} >Puntaje</option>
        </select>
      </div>
      Orientacion
      <div>
        <select name="direccion" className="home-select" onChange={(e) => changeOrder(e)}>
          <option name="direccion" value={"asc"} >Asc</option>
          <option name="direccion" value={"desc"} >Desc</option>
        </select>
      </div>
    </React.Fragment>
  )
}
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState, } from "react"
import { orderProjectsBy } from '../../redux/actions/actionCreators'
import React from 'react';
import "../home/home.css"


export default function Orders() {
  const dispatch = useDispatch()
  let allProjects = useSelector((state) => state.allProject)
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////Orders Functions///////////////////////////////////////////////////////
  const Desc = (array, atribute) => {
    let arrayDeObj = [...array]
    let arrayObj = arrayDeObj.sort(function (a, b) {
      if (a[atribute] < b[atribute]) {
        return 1;
      }
      if (a[atribute] > b[atribute]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    let newArrayObj = [...arrayObj]
    return newArrayObj
  }
  const Asc = (array, atribute) => {
    let arrayDeObj = [...array]
    let arrayObj = arrayDeObj.sort(function (a, b) {
      if (a[atribute] > b[atribute]) {
        return 1;
      }
      if (a[atribute] < b[atribute]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    let newArrayObj = [...arrayObj]
    return newArrayObj
  }

  ////////////////////////////////////////////////////////////////////////////////////
  const [orderPress, setOrderPress] = useState({ score: "", name: "" });
  const changeOrder = (e, atribute) => {
    setOrderPress({
      ...orderPress,
      score: "", name: "",
      [atribute]: e.target.value
    })
  }
  useEffect(() => {
    if (allProjects.length) {
      if (orderPress.name === "asc") {
        dispatch(orderProjectsBy(Asc(allProjects, "name")))
      }
      else if (orderPress.name === "desc") {
        dispatch(orderProjectsBy(Desc(allProjects, "name")))
      }
      if (orderPress.score === "asc") {
        dispatch(orderProjectsBy(Asc(allProjects, "score")))
      }
      else if (orderPress.score === "desc") {
        dispatch(orderProjectsBy(Desc(allProjects, "score")))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderPress])


  ////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <div>
        <select className="home-select" onChange={(e) => changeOrder(e, "name")}>
          <option key="any" value={"any"} >Alfabeto</option>
          <option key="A-Z" value={"asc"} >A-Z</option>
          <option key="Z-A" value={"desc"} >Z-A</option>
        </select>
      </div>
      <div>
        <select className="home-select" onChange={(e) => changeOrder(e, "score")}>
          <option key="any" value={"any"} >Score</option>
          <option key="mayor" value={"desc"} >Mayor Puntaje</option>
          <option key="menor" value={"asc"} >Menor Puntaje</option>
        </select>
      </div>
    </React.Fragment>
  )
}
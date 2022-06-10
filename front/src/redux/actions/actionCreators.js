/**
 * Aquí van los creadores de acciones
 */

// imports
import { SAMPLE_ACTION, GET_ALL_PROJECTS, GET_USER_BY_ID, GET_PROJECT_BY_ID, RESET_USER_BY_ID, RESET_PROJECT_BY_ID, LOGGED, SERVER_MESSAGE } from "./actions.js"
import axios from 'axios'
// Creadores de acciones
export function sampleAction(value) {
    return {
        type: SAMPLE_ACTION,
        payload: value
    }
}

export function getAllProjects() {
    return function (dispatch) {
        axios.get('http://localhost:3001/api/projects')
            .then(response => {
                dispatch({
                    type: GET_ALL_PROJECTS,
                    payload: response.data
                })
            })
    }
}




export function getUserById(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/users/${id}`)
            .then(res => {
                dispatch({
                    type: GET_USER_BY_ID,
                    payload: res.data
                })
            })
    }
}

export function getProjectById(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/project/id/${id}`)
            .then(res => {
                dispatch({
                    type: GET_PROJECT_BY_ID,
                    payload: res.data
                })
            })
    }
}

export function postProject(project) {
    return function () {
        axios.post('http://localhost:3001/api/project', project)
            .then(response => response.data)
            .catch(error => console.error(error))
    }
}

export function resetUserById() {
    return {
        type: RESET_USER_BY_ID,
        payload: []
    }
}

export function resetProjectById() {
    return {
        type: RESET_PROJECT_BY_ID,
        payload: []
    }
}

export function loggin() {
    return {
        type: LOGGED,
    }
}



export function crearMensajeState(mensaje) {

    return {
        type: SERVER_MESSAGE,
        payload: mensaje
    }
}

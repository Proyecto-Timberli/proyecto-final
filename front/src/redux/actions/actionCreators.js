import { SAMPLE_ACTION,
    GET_USER_BY_ID,
    GET_PROJECT_BY_ID,
    GET_ALL_PROJECTS,
    RESET_USER_BY_ID,
    RESET_PROJECT_BY_ID,
    SERVER_MESSAGE,
    ORDER_PROJECTS_BY,
    GET_ALL_USERS,
    ADMIN_SUSPEND_USER,
    ADMIN_SUSPEND_PROJECT,
    LOGGED_USER_ID
} from "./actions.js"

import axios from 'axios'

const {REACT_APP_API} = process.env

export function sampleAction(value) {
    return {
        type: SAMPLE_ACTION,
        payload: value
    }
}

export function getAllProjects() {
    return function (dispatch) {
        axios.get(REACT_APP_API+'/api/project')
            .then(response => {
                dispatch({
                    type: GET_ALL_PROJECTS,
                    payload: response.data
                })
            })
    }
}

export function getAllUsers(){
    return function(dispatch){
        axios.get(REACT_APP_API+'/api/user')
        .then(response => {
            dispatch({
                type: GET_ALL_USERS,
                payload: response.data
            })
        })
       
    }
}


export function getUserById(id) {
    return function (dispatch) {
        axios.get(REACT_APP_API+`/api/user/id/${id}`)
            .then(res => {
                dispatch({
                    type: GET_USER_BY_ID,
                    payload: res.data
                })
            }).catch((err) => {
                
                if (err.response.status === 404) {
                    dispatch({
                        type: GET_USER_BY_ID,
                        payload: { err: "not found" } 
                    })
                }

            })
    }
}

export function getProjectById(id) {
    return function (dispatch) {
        axios.get(REACT_APP_API+`/api/project/id/${id}`)
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
        axios.post(REACT_APP_API+'/api/project', project)
            .then(response => response.data)
            .catch(error => console.error(error))
    }
}

export function resetUserById() {
    return {
        type: RESET_USER_BY_ID,
        payload: {}
    }
}

export function resetProjectById() {
    return {
        type: RESET_PROJECT_BY_ID,
        payload: {}
    }
}


export function crearMensajeState(mensaje) {

    return {
        type: SERVER_MESSAGE,
        payload: mensaje
    }
}


export function orderProjectsBy(projects) {

    return {
        type: ORDER_PROJECTS_BY,
        payload: projects
    }
}



export function adminSupendUser(userId,userType) {
    return function (dispatch) {

        axios.put(REACT_APP_API+'/api/admin/user',{userId,userType})
            .then(res => {
                dispatch({
                    type: ADMIN_SUSPEND_USER,
                    payload: res.data
                })
            })
    }
    
}


export function adminSupendProject(projectId,state) {
    return function (dispatch) {
        axios.put(REACT_APP_API+'/api/admin/project',{projectId,state})
            .then(res => {
                dispatch({
                    type: ADMIN_SUSPEND_PROJECT,
                    payload: res.data
                })
            })
    }
}

export function setLoggedUserId(payload) {
    return {
        type: LOGGED_USER_ID,
        payload: payload
    }
}
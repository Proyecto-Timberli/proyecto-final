import {
    SAMPLE_ACTION,
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
    LOGGED_USER_ID,
    GET_CONTRUBUTION,
    LIST_PAYMENTS,
    GET_REVIEWS,
    GET_REPORTS_USERS,
    GET_REPORTS_PROJECTS,
    POST_REPORT_USER,
    POST_REPORT_PROJECT

} from "./actions.js"

import axios from 'axios'

const { REACT_APP_API } = process.env

export function sampleAction(value) {
    return {
        type: SAMPLE_ACTION,
        payload: value
    }
}

export function getAllProjects() {
    return function (dispatch) {
        axios.get(REACT_APP_API + '/api/project')
            .then(response => {
                dispatch({
                    type: GET_ALL_PROJECTS,
                    payload: response.data
                })
            })
    }
}

export function getAllUsers() {
    return function (dispatch) {
        axios.get(REACT_APP_API + '/api/user')
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
        axios.get(REACT_APP_API + `/api/user/id/${id}`)
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
        axios.get(REACT_APP_API + `/api/project/id/${id}`)
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
        axios.post(REACT_APP_API + '/api/project', project)
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



export function adminSupendUser(userId, userType) {
    return function (dispatch) {

        axios.put(REACT_APP_API + '/api/admin/user', { userId, userType })
            .then(res => {
                dispatch({
                    type: ADMIN_SUSPEND_USER,
                    payload: res.data
                })
            })
    }

}


export function adminSupendProject(projectId, state) {
    return function (dispatch) {
        axios.put(REACT_APP_API + '/api/admin/project', { projectId, state })
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

export function getContributions() {
    return function (dispatch) {
        axios.get(REACT_APP_API + `/api/admin/donation`)
            .then(res => {
                dispatch({
                    type: GET_CONTRUBUTION,
                    payload: res.data
                })
            }
            )
    }
}


export function listPayments(contribution, user) {
    return function () {
        axios.post(REACT_APP_API + '/api/admin/donation', { contribution, user })
            .then(response => response.data)
            .catch(error => console.error(error))
    }
}


export function postReview(input, userId, projectid) {
    console.log(input);
    return function () {

        axios.post(REACT_APP_API + '/api/review', { input, userId, projectid })
            .then(response => response.data)
            .catch(error => console.error(error))
    }
}



export function getReviews() {
    return function (dispatch) {
        axios.get(REACT_APP_API + '/api/review')
            .then(response => {
                dispatch({
                    type: GET_REVIEWS,
                    payload: response.data
                })
            }
            )
    }
}

/////////////////////REPORT/////////////////////////////
export function getReportsProjects(projectId) {
    return function (dispatch) {
        axios.get(REACT_APP_API + `/api/report/project`, { projectId: projectId })
            .then(res => {
                dispatch({
                    type: GET_REPORTS_PROJECTS,
                    payload: res.data
                })
            }
            )
    }
}
export function getReportsUsers(userId) {
    return function (dispatch) {
        axios.get(REACT_APP_API + `/api/report/user`, { userId: userId })
            .then(res => {
                dispatch({
                    type: GET_REPORTS_USERS,
                    payload: res.data
                })
            }
            )

    }
}
export function postReportUser({ userId, reportedBy, reportComment }) {
    return function (dispatch) {
        axios.post(REACT_APP_API + `/api/report/user`, { userId: userId, reportedBy: reportedBy, reportComment: reportComment })
            .then(res => {
                dispatch({
                    type: POST_REPORT_USER,
                    payload: res.data
                })
            }
            )

    }
}
export function postReportProject({ projectId, reportedBy, reportComment }) {
    return function (dispatch) {
        axios.post(REACT_APP_API + `/api/report/user`, { projectId: projectId, reportedBy: reportedBy, reportComment: reportComment })
            .then(res => {
                dispatch({
                    type: POST_REPORT_PROJECT,
                    payload: res.data
                })
            }
            )

    }
}
/**
 * Reducer de nuestra aplicación
 */

import { SAMPLE_ACTION, GET_ALL_PROJECTS, GET_PROJECT_BY_ID, GET_USER_BY_ID, LOGGED, RESET_PROJECT_BY_ID, RESET_USER_BY_ID, SERVER_MESSAGE, ORDER_PROJECTS_BY, GET_ALL_USERS } from "./actions/actions.js";

const initialState = {
    allProject: [],
    userById: {},
    projectById: {},
    logged: false,
    server_message: '',
    allUsers: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                test: action.payload
            }
        case GET_ALL_PROJECTS:
            return {
                ...state,
                allProject: action.payload
            }
        case GET_PROJECT_BY_ID: {
            return {
                ...state,
                projectById: action.payload
            }
        }
        case GET_USER_BY_ID: {
            return {
                ...state,
                userById: action.payload
            }
        }
        case GET_ALL_USERS: {
            return{
                ...state,
                allUsers: action.payload
            }
        }
        case LOGGED: {
            return state.logged ? {
                ...state,
                logged: false
            } : {
                ...state,
                logged: true
            }
        }
        case RESET_PROJECT_BY_ID: {
            return {
                ...state,
                projectById: action.payload
            }
        }
        case RESET_USER_BY_ID: {
            return {
                ...state,
                userById: {}
            }
        }
        case SERVER_MESSAGE: {
            return {
                ...state,
                server_message: action.payload
            }
        }
        case ORDER_PROJECTS_BY: {
            return {
                ...state,
                allProject: action.payload
            }
        }
        default:
            return state
    }
}
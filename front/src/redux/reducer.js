/**
 * Reducer de nuestra aplicación
 */

import {
    SAMPLE_ACTION,
    GET_ALL_PROJECTS,
    GET_PROJECT_BY_ID,
    GET_USER_BY_ID,
    RESET_PROJECT_BY_ID,
    RESET_USER_BY_ID,
    SERVER_MESSAGE,
    ORDER_PROJECTS_BY,
    LOGGED_USER_ID,
    GET_ALL_USERS,
    GET_CONTRUBUTION,
    LIST_PAYMENTS,
    GET_REVIEWS,
    GET_LIST_FAVORITES,
    POST_REPORT_USER,
    POST_REPORT_PROJECT,
    IS_ADMIN,

} from "./actions/actions.js";

const initialState = {
    allProject: [],
    userById: {},
    projectById: {},
    server_message: '',
    loggedUserId: null,
    allUsers: [],
    contributions: [],
    reviews: [],
    listFavorites: [],
    errors: [],
    isAdmin: false,
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
        case LOGGED_USER_ID:
            return {
                ...state,
                loggedUserId: action.payload
            }
        case GET_ALL_USERS: {
            return {
                ...state,
                allUsers: action.payload
            }
        }

        case GET_CONTRUBUTION: {
            return {
                ...state,
                contributions: action.payload
            }
        }
    
        case LIST_PAYMENTS: {
            return {
                ...state,
            };
        }

        case GET_REVIEWS: {
            return {
                ...state,
                reviews: action.payload
            }
        }
        case GET_LIST_FAVORITES: {
            return {
                ...state,
                listFavorites: action.payload
            }
        }

        case IS_ADMIN: {
            return {
                ...state,
                isAdmin: action.payload,
            }
        }
        
        default:
            return state
    }
}
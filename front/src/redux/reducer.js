/**
 * Reducer de nuestra aplicación
 */

import { SAMPLE_ACTION } from "./actions/actions";

const initialState = {
    test: "test"
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                test: action.payload
            }
    
        default:
            return state
    }
}
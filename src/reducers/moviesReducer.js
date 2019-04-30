import {FETCH_MOVIES} from "../actions/types";

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    if (action.type === FETCH_MOVIES) {
        return {
            ...state,
            items: action.payload
        };
    }
    return state;
}

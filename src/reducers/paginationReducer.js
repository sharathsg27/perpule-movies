import {SET_PAGINATION} from "../actions/types";
import {PAGINATION_OPTIONS} from "../constants/constants";


export default function (state = PAGINATION_OPTIONS, action) {
    if (action.type === SET_PAGINATION) {
        return {
            ...state,
            options: action.payload
        }
    }
    return state;
}

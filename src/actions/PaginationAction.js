import {SET_PAGINATION} from "./types";

export const setPagination = (options) => dispatch => {
    dispatch({
        type: SET_PAGINATION,
        payload: {...options}
    });
};

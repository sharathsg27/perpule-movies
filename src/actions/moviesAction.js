import {FETCH_MOVIES} from "./types";
import {PAGINATION_OPTIONS} from "../constants/constants";
import {setPagination} from "./PaginationAction";

export const fetchMovies = (term) => dispatch => {
    let url = term ? `https://www.omdbapi.com/?s=${term}&type=movie&apikey=37959dbc` :
        `https://www.omdbapi.com/?s=movie&type=movie&apikey=37959dbc`;
    fetch(url)
        .then((res) => res.json())
        .then(data => {
            if (data.Response && data.Search) {
                dispatch({
                    type: FETCH_MOVIES,
                    payload: data.Search
                });
                dispatch(setPagination({
                        totalRecords: data.Search.length,
                        recordsPerPage: PAGINATION_OPTIONS.recordsPerPage,
                        totalPages: Math.ceil(data.Search.length / PAGINATION_OPTIONS.recordsPerPage),
                        currentPage: PAGINATION_OPTIONS.currentPage
                    }
                ))
            }
        });
};

import {fetchMovies} from "./moviesAction";

export const searchMovies = (term) => dispatch => {
    dispatch(fetchMovies(term));
};

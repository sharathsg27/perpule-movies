import {combineReducers} from "redux";
import moviesReducer from './moviesReducer';
import paginationReducer from "./paginationReducer";

export default combineReducers({
    movies: moviesReducer,
    pagination: paginationReducer
});


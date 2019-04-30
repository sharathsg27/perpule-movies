import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWares = [thunk];

export const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

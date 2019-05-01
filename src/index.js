import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {store} from './store';
import {Provider} from "react-redux";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel, faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faSearch);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

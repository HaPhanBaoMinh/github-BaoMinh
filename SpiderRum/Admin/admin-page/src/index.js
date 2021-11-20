import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import "./index.css";
import reducers from './reducers/index';
import { Provider } from 'react-redux';

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render( 
    <Provider store={store} >
        <App /> 
    </Provider>

, document.getElementById("root"));
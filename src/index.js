import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import Reducers from './Reducers/index';
import thunk from 'redux-thunk';
import '../src/style.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

ReactDom.render(
    <Provider store={createStore(Reducers,composeEnhancers(applyMiddleware(thunk)))}>
            <App /> 
</Provider> ,document.querySelector('#root'));
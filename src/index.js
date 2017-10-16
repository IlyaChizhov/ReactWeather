import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store'
import Root from './Root'


const store = configureStore()

window.store = store

ReactDOM.render(
    <Root store={store} />, document.getElementById('root'));

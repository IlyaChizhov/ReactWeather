import {createStore} from 'redux';
import combineReducers from '../reducers';

export default function configureStore(initialState) {
    let store = createStore(combineReducers, initialState
        + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
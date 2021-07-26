import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import homePageReducer from './homePageReducer';


let reducers = combineReducers(
    {homePageReducer: homePageReducer}
    );

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;
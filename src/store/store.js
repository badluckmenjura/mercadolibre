import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers  from "./Reducers";
import {RequestMiddleware } from "./middleware";


const store = createStore(reducers, applyMiddleware (RequestMiddleware,thunkMiddleware ));


export default store;

import { combineReducers} from 'redux';
import itemsReducer  from "./itemsReducers";
import mainReducer from "./mainReducers";

const reducers = {
  itemsReducer, 
  mainReducer
};
export default combineReducers(reducers);
import {createStore} from 'redux'
import {combineReducers} from 'redux';
import HoverStatusReducer from './reducer/HoverStatusReducer'
 const allReducer= combineReducers({
     hoverStatusReducer: HoverStatusReducer
 })
  var store =createStore(allReducer);
  export default store;
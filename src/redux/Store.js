import {createStore} from 'redux'
import {combineReducers} from 'redux';
import HoverStatusReducer from './reducer/HoverStatusReducer'
import DialogReducer from './reducer/DialogReducer'
import ProductReducer from './reducer/ProductReducer'
 const allReducer= combineReducers({
     hoverStatusReducer: HoverStatusReducer,
     dialogStatus: DialogReducer,
     products:ProductReducer
 })
  var store =createStore(allReducer);
  export default store;
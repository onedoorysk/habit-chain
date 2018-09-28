import formReducer from './formReducer'
import habitReducer from './habitReducer'
import recordReducer from './recordReducer'
import filterReducer from './filterReducer'
import {combineReducers} from 'redux'
import modalReducer from './modalReducer';

export default combineReducers(
  {
    habit: habitReducer,
    form: formReducer,
    record: recordReducer,
    filter: filterReducer,
    modal: modalReducer
  }
)
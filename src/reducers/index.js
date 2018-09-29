import {combineReducers} from 'redux'
import formReducer from './formReducer'
import habitReducer from './habitReducer'
import filterReducer from './filterReducer'
import modalReducer from './modalReducer'

export default combineReducers(
  {
    habit: habitReducer,
    form: formReducer,
    filter: filterReducer,
    modal: modalReducer
  }
)
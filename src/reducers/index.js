import formReducer from './formReducer'
import habitReducer from './habitReducer'
import recordReducer from './recordReducer'
import filterReducer from './filterReducer'
import {combineReducers} from 'redux'

export default combineReducers(
  { habit: habitReducer,
    form: formReducer,
    record: recordReducer,
    filter: filterReducer
  }
)
import formReducer from './formReducer'
import habitReducer from './habitReducer'
import recordReducer from './recordReducer'
import {combineReducers} from 'redux'

export default combineReducers({habit: habitReducer, form: formReducer, record: recordReducer})
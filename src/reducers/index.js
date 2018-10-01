import {combineReducers} from 'redux'
import formReducer from './formReducer'
import habitReducer from './habitReducer'
import filterReducer from './filterReducer'
import modalReducer from './modalReducer'
import calendarReducer from './calendarReducer'
import timerReducer from './timerReducer'
import settingReducer from './settingReducer'

export default combineReducers(
  {
    habit: habitReducer,
    form: formReducer,
    filter: filterReducer,
    modal: modalReducer,
    calendar: calendarReducer,
    timer: timerReducer,
    setting: settingReducer
  }
)
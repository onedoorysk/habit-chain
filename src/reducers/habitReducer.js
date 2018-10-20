import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

const todayRecord = habit => {
  const recordStorageData = JSON.parse(localStorage.getItem('record')) || []
  return recordStorageData.filter(record => {
    if (record.id === habit.id &&
      record.year === new Date().getFullYear() &&
      record.month === new Date().getMonth() + 1 &&
      record.day === new Date().getDate()) return true
    return false
  })
}

const yesterdayRecord = habit => {
  const recordStorageData = JSON.parse(localStorage.getItem('record')) || []
  return recordStorageData.filter(record => {
    if (record.id === habit.id &&
      record.year === new Date().getFullYear() &&
      record.month === new Date().getMonth() + 1 &&
      record.day === new Date().getDate() - 1) return true
    return false
  })
}

export default (state = [], {type, payload}) => {
  let newState = []
  switch(type) {
    case TYPE.FIRST_PROCESS:
      const habitStorageData = JSON.parse(localStorage.getItem('habit')) || []
      newState = habitStorageData.map(habit => {
        if (todayRecord(habit).length > 0) return {...habit}
        return {...habit, completed: false}
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    case TYPE.ADD_HABIT:
      const {habitName, description} = payload
      newState = [...state, {id: v4(), habitName, description, completed: false, chainCount: 0}]
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    case TYPE.DELETE_HABIT:
      newState = state.filter(habit => habit.id !== payload.id)
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    case TYPE.DONE_HABIT:
      newState = state.map(habit => {
        if (habit.id !== payload.id) return {...habit}
        if (yesterdayRecord(habit).length > 0) return {...habit, completed: true, chainCount: habit.chainCount + 1}
        return {...habit, completed: true, chainCount: 1}
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    case TYPE.EDIT_HABIT:
      newState = state.map(habit => {
        if (habit.id !== payload.id) return habit
        return {...habit, description: payload.description}
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    case TYPE.FINISHED_DAY:
      // change all habit completed to false
      newState = state.map(habit => {
        // If today's recordData doesn't exsist, change chainCount to 0
        if (todayRecord(habit).length > 0) return {...habit, completed: false}
        return {...habit, completed: false, chainCount: 0}
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
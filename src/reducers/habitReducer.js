import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

export default (state = [], {type, payload}) => {
  let newState = []
  switch(type) {
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
        return {...habit, completed: !habit.completed, chainCount: habit.chainCount += 1}
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
    case TYPE.READ_STORAGE_DATA:
      return JSON.parse(localStorage.getItem('habit')) || []
    default:
      return state
  }
}
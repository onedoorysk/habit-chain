import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

const initialState = [
  {
    id: '001',
    habitName: '英語',
    description: '３ページ',
    completed: false
  }
]

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case TYPE.ADD_HABIT:
      const {habitName, description} = payload
      return [...state, {id: v4(), habitName, description, completed: false}]
    case TYPE.DELETE_HABIT:
      return state.filter(habit => habit.id !== payload.id)
    case TYPE.DONE_HABIT:
      return state.map(habit => {
        if (habit.id !== payload.id) return {...habit}
        return {...habit, completed: !habit.completed}
      })
    case TYPE.EDIT_HABIT:
      return state.map(habit => {
        if (habit.id !== payload.id) return habit
        return {...habit, description: payload.description}
      })
    default:
      return state
  }
}
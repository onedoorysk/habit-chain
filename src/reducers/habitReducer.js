import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

const initialList = [
  {
    id: v4(),
    habitName: 'aaa',
    description: 'hogehogehogehoge',
    completed: false
  },
  {
    id: v4(),
    habitName: 'bbb',
    description: 'hogehogehogehoge',
    completed: false
  },
  {
    id: v4(),
    habitName: 'ccc',
    description: 'hogehogehogehoge',
    completed: false
  }
]

export default (state = initialList, action) => {
  switch(action.type) {
    case TYPE.ADD_HABIT:
      return [...state, {id: v4(), habitName: action.value}]
    case TYPE.DELETE_HABIT:
      return state.filter(habit => habit.id !== action.id)
    case TYPE.CHECK_HABIT:
      return state.map(habit => {
        if (habit.id !== action.id) return {...habit}
        return {...habit, completed: !habit.completed}
      })
    default:
      return state
  }
}
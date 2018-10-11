import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

const initialState = [
  {
    id: '001',
    habitName: '毎日ランニングをする',
    description: 'ここに詳細が入りますここに詳細が入りますここに詳細が入りますここに詳細が入りますここに詳細が入ります',
    completed: false,
    chainCount: 0
  },
  {
    id: '002',
    habitName: '毎日ランニングをする',
    description: 'ここに詳細が入りますここに詳細が入りますここに詳細が入りますここに詳細が入りますここに詳細が入ります',
    completed: false,
    chainCount: 0
  }
]

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case TYPE.ADD_HABIT:
      const {habitName, description} = payload
      return [...state, {id: v4(), habitName, description, completed: false, chainCount: 0}]
    case TYPE.DELETE_HABIT:
      console.log(state, payload.id)
      return state.filter(habit => habit.id !== payload.id)
    case TYPE.DONE_HABIT:
      return state.map(habit => {
        if (habit.id !== payload.id) return {...habit}
        return {...habit, completed: !habit.completed, chainCount: habit.chainCount += 1}
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
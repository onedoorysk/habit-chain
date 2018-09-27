import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

const initialList = [
  {
    id: v4(),
    habitName: '筋トレ',
    description: '腕立て１００回、腹筋１００回',
    completed: false
  },
  {
    id: v4(),
    habitName: 'ランニング',
    description: '３km走る',
    completed: false
  },
  {
    id: v4(),
    habitName: '英語学習',
    description: '１日５ページ',
    completed: false
  }
]

export default (state = initialList, {type, payload}) => {
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
    default:
      return state
  }
}
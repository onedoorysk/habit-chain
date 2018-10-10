import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'
import axios from 'axios'

async function getInitialHabit() {
  return await axios.get('/habits')
}

export default (state = [], {type, payload}) => {
  state = getInitialHabit()
    .then(resolve => {
      console.log(resolve.data)
      return resolve.data
    })
  console.log(state)
  switch(type) {
    case TYPE.ADD_HABIT:
      const {habitName, description} = payload
      axios.post('/habits', {
        id: v4(),
        habitName,
        description,
        completed: false,
        chainCount: 0
      }).then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(new Error(err))
      })
      // const newState = axios.get('/api/habit')
      return [...state, {id: v4(), habitName, description, completed: false, chainCount: 0}]
    case TYPE.DELETE_HABIT:
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
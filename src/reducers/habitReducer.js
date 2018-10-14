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
        return {...habit, completed: true, chainCount: habit.chainCount + 1}
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
    case TYPE.FINISHED_DAY:
      let chainCount = ''
      const recordList = JSON.parse(localStorage.getItem('record'))
      // change all habit completed to false
      newState = state.map(habit => {
        let initializeChainCountFlag = false
        if (recordList) {
          initializeChainCountFlag = recordList.some(record => {
            if (record.id !== habit.id) return false
            if (record.year !== new Date().getFullYear()) return false
            if (record.month !== new Date().getMonth() + 1) return false
            if (record.day !== new Date().getDate()) return false
            return true
          })
        }
        // If today's recordData doesn't exsist, change chainCount to 0
        console.log(initializeChainCountFlag)
        if (!initializeChainCountFlag) chainCount = 0
        else chainCount = habit.chainCount
        return ({...habit, completed: false, chainCount})
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
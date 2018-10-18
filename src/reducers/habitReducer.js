import TYPE from '../actions/_actionType'
import v4 from 'uuid/v4'

export default (state = [], {type, payload}) => {
  let [newState, recordList, habitList] = [[], [], []]
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
    case TYPE.FIRST_PROCESS:
      habitList = JSON.parse(localStorage.getItem('habit')) || []
      recordList = JSON.parse(localStorage.getItem('record'))
      newState = habitList.map(habit => {
        if (!recordList) return {...habit}
        let changeToNotYetFlag = recordList.some(record => {
          if (record.id === habit.id &&
            record.year === new Date().getFullYear() &&
            record.month === new Date().getMonth() + 1 &&
            record.day === new Date().getDate()) return false
          return true
        })
        console.log(changeToNotYetFlag)
        if (changeToNotYetFlag) return {...habit}
        return {...habit, completed: false}
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    case TYPE.FINISHED_DAY:
      recordList = JSON.parse(localStorage.getItem('record'))
      // change all habit completed to false
      newState = state.map(habit => {
        if (!recordList) return {...habit, completed: false}
        let initializeChainCountFlag = recordList.some(record => {
            if (record.id === habit.id &&
            record.year === new Date().getFullYear() &&
            record.month === new Date().getMonth() + 1 &&
            record.day === new Date().getDate()) return true
          return false
        })
        // If today's recordData doesn't exsist, change chainCount to 0
        if (initializeChainCountFlag) return {...habit, completed: false, chainCount: 0}
        return {...habit, completed: false}
      })
      localStorage.setItem('habit', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
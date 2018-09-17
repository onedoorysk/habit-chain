import TYPE from '../actions/_actionType'

export default (state = '', action) => {
  switch(action.type) {
    case TYPE.CHANGE_HABIT_TEXT:
      return state = action.value
    default:
      return state
  }
}
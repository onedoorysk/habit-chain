import TYPE from '../actions/_actionType'

export default (state = {habitName: '', description: ''}, {type, payload}) => {
  switch(type) {
    case TYPE.TYPE_HABIT_NAME:
      return {...state, habitName: payload.value}
    case TYPE.TYPE_HABIT_DESCRIPTION:
      return {...state, description: payload.value}
    default:
      return state
  }
}
import TYPE from '../actions/_actionType'

export default (state = 0, action) => {
  switch (action.type) {
    case TYPE.DAY_COUNT:
      return state += 1
    default:
      return state
  }
}
import TYPE from '../actions/_actionType'

export default (state = false, action) => {
  switch (action.type) {
    case TYPE.OPEN_MODAL:
      return !state
    default:
      return state
  }
}
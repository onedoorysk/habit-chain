import TYPE from '../actions/_actionType'

export default (state = '', {type, payload}) => {
  switch (type) {
    case TYPE.OPEN_MODAL:
      state = payload.modalName
      return state
    default:
      return state
  }
}
import TYPE from '../actions/_actionType'

export default (state = 'all', {type, payload}) => {
  switch (type) {
    case TYPE.FILTER_LIST:
      return state = payload.filterType
    default:
      return state
  }
}
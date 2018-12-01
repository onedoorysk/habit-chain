import TYPE, { FILTER_TYPE } from '../actions/_actionType'

export default (state = FILTER_TYPE.ALL, {type, payload}) => {
  switch (type) {
    case TYPE.FILTER_LIST:
      return state = payload.filterType
    default:
      return state
  }
}
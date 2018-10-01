import TYPE from '../actions/_actionType'

const initialState = {
  completedSetting1: false,
  completedSetting2: false
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case TYPE.INITIAL_SET:
      const {completedSetting1, completedSetting2} = payload
      return {...state, completedSetting1, completedSetting2}
    default:
      return state
  }
}
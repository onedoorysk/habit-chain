import TYPE from '../actions/_actionType'

const initialState = {
  completedSetting1: false,
  completedSetting2: false,
  completedSetting3: false
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case TYPE.INITIAL_SET:
      console.log(payload)
      const {completedSetting1, completedSetting2, completedSetting3} = payload
      return {...state, completedSetting1, completedSetting2, completedSetting3}
    default:
      return state
  }
}
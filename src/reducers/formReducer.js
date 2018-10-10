import TYPE from '../actions/_actionType'

const initialState = {
  habitName: '',
  description: '',
  nameCharCount: '',
  descriptionCharCount: ''
}

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case TYPE.TYPE_HABIT_NAME:
      return {...state, habitName: payload.value}
    case TYPE.TYPE_HABIT_DESCRIPTION:
      return {...state, description: payload.value}
    case TYPE.CHECK_NAME_CHAR_COUNT:
      return {...state, nameCharCount: 10 - state.habitName.length}
    case TYPE.CHECK_DESCRIPTION_CHAR_COUNT:
      return {...state, descriptionCharCount: 50 - state.description.length}
    case TYPE.RESET_FORM:
      return {
        ...state,
        habitName: '',
        description: '',
        nameCharCount: '',
        descriptionCharCount: ''
      }
    default:
      return state
  }
}
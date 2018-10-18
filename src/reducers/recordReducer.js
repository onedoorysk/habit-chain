import TYPE from '../actions/_actionType'

export default (state = [], {type, payload}) => {
  let newState = []
  switch(type) {
    case TYPE.REGIST_RECORD:
      newState = [...state,
        {
          id: payload.id,
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate()
        }
      ]
      localStorage.setItem('record', JSON.stringify(newState))
      return newState
    case TYPE.FIRST_PROCESS:
      return JSON.parse(localStorage.getItem('record')) || []
    case TYPE.DELETE_RECORD:
      const recordData = JSON.parse(localStorage.getItem('record'))
      if (recordData) {
        newState = recordData.filter(record => record.id !== payload.id)
        localStorage.setItem('record', JSON.stringify(newState))
        return newState
      }
      return state
    default:
      return state
  }
}
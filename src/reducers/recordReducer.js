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
    case TYPE.READ_STORAGE_DATA:
      return JSON.parse(localStorage.getItem('record')) || []
    case TYPE.DELETE_RECORD:
      newState = JSON.parse(localStorage.getItem('record')).filter(record => record.id !== payload.id)
      localStorage.setItem('record', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
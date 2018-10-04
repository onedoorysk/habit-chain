import TYPE from '../actions/_actionType'

const initialState = [
  {
    id: '001',
    year: 2018,
    month: 10,
    day: 3
  },
  {
    id: '001',
    year: 2018,
    month: 10,
    day: 4
  },
  {
    id: '001',
    year: 2018,
    month: 9,
    day: 21
  }
]

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case TYPE.REGIST_RECORD:
      return [...state, {
        id: payload.id,
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDay()
      }]
    default:
      return state
  }
}
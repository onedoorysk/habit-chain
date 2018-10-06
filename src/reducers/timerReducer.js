import TYPE from '../actions/_actionType'

const initialState = {
  inputHH: '24',
  inputMM: '0',
  countHH: '',
  countMM: '',
  countSS: ''
}

const initialSetTimer = (state) => {
  const timeLagHH = state.inputHH - new Date().getHours()
  const timeLagMM = state.inputMM - new Date().getMinutes()
  const timeLagSS = 60 - new Date().getSeconds()
  // ex) input: 20:20:XX
  //   current: 21:30:XX
  //    expect: 22:49:XX
  if (timeLagHH < 1 && timeLagMM <= 0) {
    state.countHH = timeLagHH + 23
    state.countMM = timeLagMM + 59
    console.log(1)
  }
  // ex) input: 21:40:XX
  //   current: 21:30:XX
  //    expect: 00:09:XX
  if (timeLagHH === 0 && timeLagMM > 0) {
    state.countMM = timeLagMM - 1
    console.log(2)
  }
  // ex) input: 20:40:XX
  //   current: 21:30:XX
  //    expect: 23:09:XX
  if (timeLagHH < 0 && timeLagMM > 0) {
    state.countHH = timeLagHH + 24
    state.countMM = timeLagMM - 1
    console.log(3)
  }
  // ex) input: 22:40:XX
  //   current: 21:30:XX
  //    expect: 01:09:XX
  if (timeLagHH > 0 && timeLagMM > 0) {
    state.countHH = timeLagHH
    state.countMM = timeLagMM - 1
    console.log(4)
  }
  // ex) input: 22:20:XX
  //   current: 21:30:XX
  //    expect: 00:59:XX
  if (timeLagHH > 0 && timeLagMM <= 0) {
    state.countHH = timeLagHH - 1
    state.countMM = timeLagMM + 59
    console.log(5)
  }
  state.countSS = timeLagSS
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.COUNT_TIMER:
      let {countHH, countMM, countSS} = state
      if (!countHH && !countMM && !countSS) {
        initialSetTimer(state)
      }
      // If remaining-time is 1 seconds, count-time will be reset
      if (state.countHH === 0 && state.countMM === 0 && state.countSS === 1) {
        initialSetTimer(state)
      }
      // When 1 hour have passed, count-timer will be calculated
      if (state.countHH > 0 && state.countMM === 0 && state.countSS === 0) {
        state.countHH -= 1
        state.countMM = 59
        state.countSS = 60
      } else if (state.countMM > 0 && state.countSS === 0) {
      // When 1 minutes have passed, count-timer will be calculated
        state.countMM -= 1
        state.countSS = 60
      }
      state.countSS -= 1
      return state
    default:
      return state
  }
}
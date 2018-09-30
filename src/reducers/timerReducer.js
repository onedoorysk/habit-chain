import TYPE from '../actions/_actionType'

const initialState = {
  hh: 24,
  mm: 60,
  ss: 60,
  countHH: '',
  countMM: '',
  countSS: '',
  stopTimer: false
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.COUNT_TIMER:
      let {hh, mm, ss, countHH, countMM, countSS} = state
      if (!countHH && !countMM && !countSS) {
        state.countHH = hh - new Date().getHours() - 1
        state.countMM = mm - new Date().getMinutes() - 1
        state.countSS = ss - new Date().getSeconds()
      } else {
        // If remaining-time is 1 seconds, count-time will be stop
        if (state.countHH === 0 && state.countMM === 0 && state.countSS === 1) {
          state.stopTimer = !state.stopTimer
        }
        // When 1 minutes have passed, count-timer will be calculated
        if (state.countHH > 0 && state.countMM > 0 &&state.countSS === 0) {
          state.countMM -= 1
          state.countSS = 60
        }
        // When 1 hour have passed, count-timer will be calculated
        if (state.countHH > 0 && state.countMM === 0 && state.countSS === 0) {
          state.countHH -= 1
          state.countMM = 59
          state.countSS = 60
        }
        state.countSS -= 1
      }
      return state
    default:
      return state
  }
}
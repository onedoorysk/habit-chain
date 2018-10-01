import TYPE from '../actions/_actionType'

const initialState = {
  hh: 24,
  mm: 0,
  countHH: '',
  countMM: '',
  countSS: '',
  stopTimer: false
}

const initialSettingTimer = (state) => {
  let {hh, mm} = state
  if (mm - new Date().getMinutes() > 0) {
    state.countMM = mm - new Date().getMinutes() - 1
    state.countHH = hh - new Date().getHours()
  } else {
    state.countMM = mm - new Date().getMinutes() - 1 + 60
    state.countHH = hh - new Date().getHours() - 1
  }
  state.countSS = 60 - new Date().getSeconds()
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.COUNT_TIMER:
      let {countHH, countMM, countSS} = state
      if (!countHH && !countMM && !countSS) {
        initialSettingTimer(state)
      }
      // If remaining-time is 1 seconds, count-time will be stop
      if (state.countHH === 0 && state.countMM === 0 && state.countSS === 1) {
        state.stopTimer = !state.stopTimer
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
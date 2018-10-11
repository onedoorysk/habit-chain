import TYPE from '../actions/_actionType'

const getCalendarData = (year, month) => {
  const firstDate = new Date(year, (month - 1), 1)
  const lastDay = new Date(year, (firstDate.getMonth() + 1), 0).getDate()
  const weekday = firstDate.getDay()

  let calendarData = [] // months data-list
  let weekData = [] // weeks data-list
  let weekdayCount = weekday
  for (let i = 0; i < lastDay; i++) {
    weekData.push({
      day: i + 1,
      weekday: weekdayCount
    })
    // If weekdayCount is 6(Saturday) or last day of the month, add weekData to calendarData
    if (weekdayCount >= 6 || i + 1 === lastDay) {
      calendarData.push(weekData)
    }
    // If weekdayCount is 6(Saturday), it changes 0(Sunday) and delete weekData
    if (weekdayCount >= 6) {
      weekdayCount = 0;
      weekData = []
    } else {
      weekdayCount++;
    }
  }
  // If the first day of week 1 is except Sunday, add blank object to calendarData
  const firstWeekWeekday = calendarData[0][0].weekday
  if (firstWeekWeekday > 0) {
    for (let i = 0; i < firstWeekWeekday; i++) {
      calendarData[0].splice(0, 0, {})
    }
  }
  // If the last day of the last week is except Saturday, add blank object to calendarData
  const lastWeekDays = calendarData[calendarData.length - 1].length
  if (lastWeekDays < 7) {
    for (let i = 0; i < 7 - lastWeekDays; i++) {
      calendarData[calendarData.length - 1].push({})
    }
  }
  return calendarData;
}

const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  calendarData: getCalendarData(new Date().getFullYear(), new Date().getMonth() + 1)
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.CHANGE_CALENDAR :
      let year = ''
      let month = ''
      let calendarData = []
      switch (payload.changeValue) {
        case 'next':
          if (state.month === 12) {
            year = state.year + 1
            month = 1
          } else {
            month = state.month + 1
            year = state.year
          }
          break
        case 'prev' :
          if (state.month === 1) {
            year = state.year - 1
            month = 12
          } else {
            month = state.month - 1
            year = state.year
          }
          break
        default:
          break
      }
      calendarData = getCalendarData(year, month)
      return {year, month, calendarData}
    default :
      return state
  }
}
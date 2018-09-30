import TYPE from '../actions/_actionType'

const getCalendarData = (year, month) => {
  const firstDate = new Date(year, (month - 1), 1)
  const lastDay = new Date(year, (firstDate.getMonth() + 1), 0).getDate()
  const weekday = firstDate.getDay()

  let calendarData = [] // 月の日付データ群
  let weekData = [] // 週ごとの日付データ群
  let weekdayCount = weekday
  for (let i = 0; i < lastDay; i++) {
    weekData.push({
      day: i + 1,
      weekday: weekdayCount
    })
    // 土曜日(6)または月の最終日の場合に月の日付データ群に追加
    if (weekdayCount >= 6 || i + 1 === lastDay) {
      calendarData.push(weekData)
    }
    // 土曜日(6)であれば日曜日(0)にし、週ごとのデータを削除
    if (weekdayCount >= 6) {
      weekdayCount = 0;
      weekData = []
    } else {
      weekdayCount++;
    }
  }
  // １週目の開始が日曜以外であれば空のオブジェクトを追加
  const firstWeekWeekday = calendarData[0][0].weekday
  if (firstWeekWeekday > 0) {
    for (let i = 0; i < firstWeekWeekday; i++) {
      calendarData[0].splice(0, 0, {})
    }
  }
  // 最終週の終わりが土曜日以外であれば空のオブジェクトを追加
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
      const {changeValue} = payload
      switch (changeValue) {
        case 'next' :
          if (state.month === 12) {
            state.year += 1
            state.month = 1
          } else {
            state.month += 1
          }
          break
        case 'prev' :
          if (state.month === 1) {
            state.year -= 1
            state.month = 12
          } else {
            state.month -= 1
          }
          break
        default :
          break
      }
      state.calendarData = getCalendarData(state.year, state.month)
      return state
    default :
      return state
  }
}
import { connect } from 'react-redux'
import Calendar from '../components/Calendar/Calendar'
import { changeCalendarAction } from '../actions'

const filterRecordByDisplayedCalendar = (calendar, recordList, id) => {
  let recordDataOnlyDay = []
  recordList.forEach(record => {
    if (record.id === id && record.year === calendar.year && record.month === calendar.month) {
      recordDataOnlyDay.push(record.day)
    }
  })
  return recordDataOnlyDay
}

const mapStateToProps = (state, ownProps) => {
  const {calendar, record} = state
  return {
    calendar: calendar,
    recordsOfDisplayedCalendar: filterRecordByDisplayedCalendar(calendar, record, ownProps.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCalendar: changeType => dispatch(changeCalendarAction(changeType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
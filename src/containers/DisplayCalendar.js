import { connect } from 'react-redux'
import Calendar from '../components/organisms/Calendar'
import { changeCalendarAction } from '../actions'
import { withStyles } from '@material-ui/core/styles'

const filterRecordByDisplayedCalendar = (calendar, recordList, id) => {
  let recordDataOnlyDay = []
  recordList.forEach(record => {
    if (record.id === id && record.year === calendar.year && record.month === calendar.month) {
      recordDataOnlyDay.push(record.day)
    }
  })
  return recordDataOnlyDay
}

const mapStateToProps = (state, ownProps) => ({
  calendar: state.calendar,
  recordsOfDisplayedCalendar: filterRecordByDisplayedCalendar(state.calendar, state.record, ownProps.id),
  dayOfWeekList: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
})

const mapDispatchToProps = dispatch => ({
  changeCalendar: changeType => dispatch(changeCalendarAction(changeType))
})

const styles = {
  prevIcon: {
    color: '#B5B5B5',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
  },
  nextIcon: {
    color: '#B5B5B5',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Calendar))

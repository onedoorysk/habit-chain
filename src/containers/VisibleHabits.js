import { connect } from 'react-redux'
import HabitList from '../components/Habit/HabitList'
import {firstProcessAction, doneHabitAction, registRecordAction} from '../actions'

const filterHabit = (filter, habitList) => {
  return habitList.filter(habit => {
    switch (filter) {
      case 'not yet':
        return !habit.completed
      case 'done':
        return habit.completed
      case 'all':
        return habit
      default:
        return habit
    }
  })
}
// Pop today's record data. If it exists, it changes done-button disable.
const filterRecordOfHabit = (record, id) => {
  return record.filter(record => {
    return (record.id === id
      && record.year === new Date().getFullYear()
      && record.month === new Date().getMonth() + 1
      && record.day === new Date().getDate())
  })
}

const mapStateToProps = (state, ownProps) => ({
  habitList: filterHabit(state.filter, state.habit),
  recordOfHabit: filterRecordOfHabit(state.record, ownProps.id)
})

const mapDisptchToProps = dispatch => ({
  firstProcess: () => dispatch(firstProcessAction),
  doneHabit: id => dispatch(doneHabitAction(id)),
  registRecord: id => dispatch(registRecordAction(id))
})

export default connect(mapStateToProps, mapDisptchToProps)(HabitList)
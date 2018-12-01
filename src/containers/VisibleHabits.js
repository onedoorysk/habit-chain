import { connect } from 'react-redux'
import HabitList from '../components/organisms/HabitList'
import {firstProcessAction, doneHabitAction, registRecordAction} from '../actions'
import { FILTER_TYPE } from '../actions/_actionType'
import {withStyles} from '@material-ui/core/styles'

const filterHabit = (filter, habitList) => {
  return habitList.filter(habit => {
    switch (filter) {
      case FILTER_TYPE.NOT_YET:
        return !habit.completed
      case FILTER_TYPE.DONE:
        return habit.completed
      case FILTER_TYPE.ALL:
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
  allHabitList: state.habit,
  filterHabitList: filterHabit(state.filter, state.habit),
  recordOfHabit: filterRecordOfHabit(state.record, ownProps.id)
})

const mapDisptchToProps = dispatch => ({
  firstProcess: () => dispatch(firstProcessAction),
  doneHabit: id => dispatch(doneHabitAction(id)),
  registRecord: id => dispatch(registRecordAction(id))
})

const styles = {
  doneButton: {
    position: 'absolute',
    bottom: '10px',
    right: '15px',
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#1C75BC'
    },
    transition: 'none'
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(withStyles(styles)(HabitList))

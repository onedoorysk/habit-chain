import { connect } from 'react-redux'
import HabitDetail from '../components/organisms/HabitDetail'
import { openAndCloseModalAction } from '../actions'
import { withStyles } from '@material-ui/core/styles'

const popTargetHabit = (habit, id) => {
  let targetHabit = {}
  habit.forEach(habit => {
    if (habit.id === id) targetHabit = habit
  })
  return targetHabit
}

const mapStateToProps = (state, ownProps) => ({
  habit: popTargetHabit(state.habit, ownProps.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName))
})

const styles = {
  deleteIcon: {
    width: '30px',
    height: '30px',
    color: '#B5B5B5',
    cursor: 'pointer',
    margin: '3px 0 0 0',
    '&:hover': {
      color: '#d5d5d5'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  descriptionTitleIcon: {
    width: '16px',
    height: '16px',
    color: '#444444'
  },
  editIcon: {
    width: '20px',
    height: '20px',
    padding: '0 0 4px 0',
    margin: '0 0 0 5px',
    color: '#B5B5B5',
    cursor: 'pointer',
    '&:hover': {
      color: '#d5d5d5'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  recordIcon: {
    width: '16px',
    height: '16px',
    color: '#444444'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles) (HabitDetail))

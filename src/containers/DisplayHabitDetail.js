import {connect} from 'react-redux'
import HabitDetail from '../components/Habit/HabitDetail'
import {openAndCloseModalAction} from '../actions'

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

export default connect(mapStateToProps, mapDispatchToProps)(HabitDetail)
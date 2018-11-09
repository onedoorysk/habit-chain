import { connect } from 'react-redux'
import AddHabitModal from '../components/Habit/AddHabitModal'
import {openAndCloseModalAction, addHabitAction, typeHabitNameAction, typeHabitDescriptionAction, checkNameCharCountAction, checkDescriptionCharCountAction, resetFormAction, hideNameCharCountAction, hideDescriptionCharCountAction} from '../actions'

const mapStateToProps = state => ({
  modal: state.modal,
  form: state.form
})

const mapDispatchToProps = dispatch => ({
  openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName)),
  resetForm: () => dispatch(resetFormAction),
  typeHabitName: value => dispatch(typeHabitNameAction(value)),
  typeHabitDescription: value => dispatch(typeHabitDescriptionAction(value)),
  checkNameCharCount: () => dispatch(checkNameCharCountAction),
  checkDescriptionCharCount: () => dispatch(checkDescriptionCharCountAction),
  hideNameCharCount: () => dispatch(hideNameCharCountAction),
  hideDescriptionCharCount: () => dispatch(hideDescriptionCharCountAction),
  addHabit: (habitName, description) => dispatch(addHabitAction(habitName, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddHabitModal)
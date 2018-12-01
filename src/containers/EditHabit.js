import { connect } from 'react-redux'
import {openAndCloseModalAction, editHabitAction, typeHabitDescriptionAction, checkDescriptionCharCountAction, resetFormAction, hideDescriptionCharCountAction} from '../actions'
import EditHabitModal from '../components/organisms/EditHabitModal'

const mapStateToProps = state => ({
  modal: state.modal,
  form: state.form
})

const mapDispatchToProps = dispatch => ({
  openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName)),
  editHabit: (id, value) => dispatch(editHabitAction(id, value)),
  typeHabitDescription: description => dispatch(typeHabitDescriptionAction(description)),
  checkDescriptionCharCount: () => dispatch(checkDescriptionCharCountAction),
  resetForm: () => dispatch(resetFormAction),
  hideDescriptionCharCount: () => dispatch(hideDescriptionCharCountAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditHabitModal)
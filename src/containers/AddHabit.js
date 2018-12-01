import { connect } from 'react-redux'
import AddHabitModal from '../components/organisms/AddHabitModal'
import {openAndCloseModalAction, addHabitAction, typeHabitNameAction, typeHabitDescriptionAction, checkNameCharCountAction, checkDescriptionCharCountAction, resetFormAction, hideNameCharCountAction, hideDescriptionCharCountAction} from '../actions'
import { withStyles } from '@material-ui/core/styles'

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

const styles = {
  textStyle: {
    width: '223px'
  },
  createButton: {
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#4BA0E3'
    }
  },
  cancelButton: {
    width: '90px',
    backgroundColor: '#EB3029',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#F26963'
    }
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddHabitModal))

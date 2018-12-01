import { connect } from 'react-redux'
import {openAndCloseModalAction, editHabitAction, typeHabitDescriptionAction, checkDescriptionCharCountAction, resetFormAction, hideDescriptionCharCountAction} from '../actions'
import EditHabitModal from '../components/organisms/EditHabitModal'
import { withStyles } from '@material-ui/core/styles'

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditHabitModal))

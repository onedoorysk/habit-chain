import { connect } from 'react-redux'
import { openAndCloseModalAction, deleteHabitAction, deleteRecordAction } from '../actions'
import DeleteHabitModal from '../components/organisms/DeleteHabitModal'
import { withStyles } from '@material-ui/core/styles'

const mapStateToProps = state => ({
  modal: state.modal
})

const mapDispatchToProps = dispatch => ({
  openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName)),
  deleteHabit: id => dispatch(deleteHabitAction(id)),
  deleteRecord: id => dispatch(deleteRecordAction(id))
})

const styles = {
  cancelButton: {
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#4BA0E3'
    }
  },
  deleteButton: {
    width: '90px',
    backgroundColor: '#EB3029',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#F26963'
    }
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DeleteHabitModal))
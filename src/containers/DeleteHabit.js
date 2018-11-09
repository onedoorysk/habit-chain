import { connect } from 'react-redux'
import {openAndCloseModalAction, deleteHabitAction, deleteRecordAction} from '../actions'
import DeleteHabit from '../components/Habit/DeleteHabit'

const mapStateToProps = state => ({
  modal: state.modal
})

const mapDispatchToProps = dispatch => ({
  openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName)),
  deleteHabit: id => dispatch(deleteHabitAction(id)),
  deleteRecord: id => dispatch(deleteRecordAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteHabit)
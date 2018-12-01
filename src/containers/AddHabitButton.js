import AddHabitButton from '../components/molecules/AddHabitButton'
import { withStyles } from '@material-ui/core/styles'
import { openAndCloseModalAction } from '../actions'
import { connect } from 'react-redux'

const styles = {
  button: {
    backgroundColor: '#5CC0EF',
    color: '#FFFFFF',
    position: 'fixed',
    bottom: '45px',
    right: '15px',
    '&:hover': {
      backgroundColor: '#9EDAF6'
    }
  }
}

const mapDispatchToProps = dispatch => ({
  openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName))
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(AddHabitButton))

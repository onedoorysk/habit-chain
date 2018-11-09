import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import {withStyles} from '@material-ui/core/styles'
import {openAndCloseModalAction} from '../actions'
import {connect} from 'react-redux'

const AddHabitButton = ({classes, openAndCloseModal}) => (
  <Button
    variant="fab"
    aria-label="Add"
    className={classes.button}
    onClick={() => openAndCloseModal('addHabit')}
  >
    <AddIcon />
  </Button>
)

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

export default withStyles(styles)(connect(undefined, mapDispatchToProps)(AddHabitButton))
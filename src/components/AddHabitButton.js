import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import {openModalAction} from '../actions'
import store from '../store'

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

const AddHabitButton = ({classes}) => {
  return (
    <Button
      variant="fab"
      aria-label="Add"
      className={classes.button}
      onClick={() => store.dispatch(openModalAction)}
    >
      <AddIcon />
    </Button>
  )
}

export default withStyles(styles)(AddHabitButton)
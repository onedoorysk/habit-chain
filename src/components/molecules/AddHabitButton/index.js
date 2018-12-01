import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

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

export default AddHabitButton

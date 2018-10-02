import React from 'react'
import AddHabitButton from './AddHabitButton'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import store from '../store'
import {openModalAction, editHabitAction, typeHabitNameAction, typeHabitDescriptionAction} from '../actions'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '999',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'display 1s ease-in-out',
    display: 'none'
  },
  block: {
    display: 'none'
  },
  modalWindow: {
    backgroundColor: '#ffffff',
    border: '3px solid #1C75BC',
    borderRadius: '2%',
    textAlign: 'center',
    margin: 'auto',
    width: '300px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitle: {
    color: '#444444',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '25px 0 0 0'
  },
  textContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    width: '223px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px auto 50px auto',
    width: '210px'
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

const resetForm = () => {
  store.dispatch(typeHabitNameAction(''))
  store.dispatch(typeHabitDescriptionAction(''))
}

const EditHabit = ({classes, habit}) => {
  const {
    root,
    modalWindow,
    modalTitle,
    textStyle,
    createButton,
    cancelButton,
    buttonContainer,
    textContainer
  } = classes
  const isOpenModal = store.getState().modal
  const {id, habitName, description} = habit
  const formDescription = store.getState().form.description
  return (
    <div>
      <div
        className={root}
        style={{'display': isOpenModal === 'editModal' ? 'flex' : 'none'}}
        onClick={() => {
          store.dispatch(openModalAction(''))
        }}
      >
        <div
          className={modalWindow}
          onClick={e => e.stopPropagation()}
        >
          <div className={modalTitle}>EDIT HABIT</div>
          <div className={textContainer}>
            <TextField
              className={textStyle}
              label="detail"
              multiline
              rows="1"
              rowsMax="6"
              margin="normal"
              defaultValue={description}
              onChange={e => store.dispatch(typeHabitDescriptionAction(e.currentTarget.value))}
            />
          </div>
          <div className={buttonContainer}>
            <Button
              className={createButton}
              disabled={
                habitName.length === 0 ||
                habitName.length > 10 ||
                description.length > 50 ? true : false
              }
              onClick={() => {
                store.dispatch(editHabitAction(id, formDescription))
                store.dispatch(openModalAction(''))
                resetForm()
              }}
            >
              SAVE
            </Button>
            <Button
              className={cancelButton}
              onClick={() => {
                store.dispatch(openModalAction(''))
                resetForm()
              }}
            >
              CANCEL
            </Button>
          </div>
        </div>
      </div>
      <AddHabitButton />
    </div>
  )
}

export default withStyles(styles)(EditHabit)
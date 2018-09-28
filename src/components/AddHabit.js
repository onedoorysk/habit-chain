import React from 'react'
import AddHabitButton from './AddHabitButton'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import store from '../store'
import {openModalAction, addHabitAction, typeHabitNameAction, typeHabitDescriptionAction} from '../actions'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '999',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalWindow: {
    width: '300px',
    height: '375px',
    backgroundColor: '#ffffff',
    border: '3px solid #1C75BC',
    borderRadius: '2%',
    textAlign: 'center',
    position: 'absolute',
    top: '100px',
    left: '9%'
  },
  modalTitle: {
    color: '#444444',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '25px 0 0 0'
  },
  textStyle: {
    width: '223px'
  },
  createButton: {
    position: 'absolute',
    bottom: '25px',
    left: '38px',
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  cancelButton: {
    position: 'absolute',
    bottom: '25px',
    right: '38px',
    width: '90px',
    backgroundColor: '#EB3029',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
  }
}

const resetForm = () => {
  store.dispatch(typeHabitNameAction(''))
  store.dispatch(typeHabitDescriptionAction(''))
}

const AddHabit = ({classes}) => {
  // styles
  const {root, modalWindow, modalTitle, textStyle, createButton, cancelButton} = classes
  const isOpenModal = store.getState().modal
  const {habitName, description} = store.getState().form

  return (
    <div>
      <div
        className={root}
        style={{'display': isOpenModal ? 'block' : 'none'}}
        onClick={() => {
          store.dispatch(openModalAction)
          resetForm()
        }}
      >
        <div
          className={modalWindow}
          onClick={e => e.stopPropagation()}
        >
          <div className={modalTitle}>NEW HABIT</div>
          <TextField
            className={textStyle}
            label="名前"
            rows="1"
            rowsMax="1"
            margin="normal"
            required
            value={habitName}
            onChange={e => store.dispatch(typeHabitNameAction(e.currentTarget.value))}
          />
          <TextField
            className={textStyle}
            label="詳細"
            multiline
            rows="1"
            rowsMax="6"
            margin="normal"
            value={description}
            onChange={e => store.dispatch(typeHabitDescriptionAction(e.currentTarget.value))}
          />
          <Button
            className={createButton}
            disabled={
              habitName.length === 0 ||
              habitName.length > 10 ||
              description.length > 50 ? true : false
            }
            onClick={() => {
              store.dispatch(addHabitAction(habitName, description))
              store.dispatch(openModalAction)
              resetForm()
            }}
          >
            CREATE
          </Button>
          <Button
            className={cancelButton}
            onClick={() => {
              store.dispatch(openModalAction)
            }}
          >
            CANCEL
          </Button>
        </div>
      </div>
      <AddHabitButton />
    </div>
  )
}

export default withStyles(styles)(AddHabit)
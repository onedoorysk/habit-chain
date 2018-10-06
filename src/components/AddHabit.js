import React from 'react'
import AddHabitButton from './AddHabitButton'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import store from '../store'
import {openAndCloseModalAction, addHabitAction, typeHabitNameAction, typeHabitDescriptionAction, checkNameCharCountAction, checkDescriptionCharCountAction, resetFormAction} from '../actions'
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
  textContents: {
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
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  charCountStyle: {
    fontSize: '14px',
    color: '#B5B5B5',
    margin: '25px 0 0 10px',
    textAlign: 'center',
    width: '10px'
  }
}

const AddHabit = ({classes}) => {
  const {
    root,
    modalWindow,
    modalTitle,
    textStyle,
    createButton,
    cancelButton,
    buttonContainer,
    textContents,
    textContainer,
    charCountStyle
  } = classes
  const isOpenModal = store.getState().modal
  const {habitName, description, nameCharCount, descriptionCharCount} = store.getState().form
  return (
    <div>
      <div
        className={root}
        style={{'display': isOpenModal === 'addHabit' ? 'flex' : 'none'}}
        onClick={() => {
          store.dispatch(openAndCloseModalAction(''))
          store.dispatch(resetFormAction)
        }}
      >
        <div
          className={modalWindow}
          onClick={e => e.stopPropagation()}
        >
          <div className={modalTitle}>NEW HABIT</div>
          <div className={textContents}>
            <div class={textContainer}>
              <TextField
                className={textStyle}
                label="name"
                rows="1"
                rowsMax="1"
                margin="normal"
                required
                value={habitName}
                onChange={e => {
                  store.dispatch(typeHabitNameAction(e.currentTarget.value))
                  store.dispatch(checkNameCharCountAction)
                }}
              />
              <div
                className={charCountStyle}
                style={
                  nameCharCount < 4
                    ? (nameCharCount < 1 ? {color: '#E0245E'} : {color: '#FFAD1F'})
                    : {}
                  }
              >
                {nameCharCount}
              </div>
            </div>
            <div class={textContainer}>
              <TextField
                className={textStyle}
                label="detail"
                multiline
                rows="1"
                rowsMax="6"
                margin="normal"
                value={description}
                onChange={e => {
                  store.dispatch(typeHabitDescriptionAction(e.currentTarget.value))
                  store.dispatch(checkDescriptionCharCountAction)
                }}
              />
              <div
                className={charCountStyle}
                style={
                  descriptionCharCount < 11
                    ? (descriptionCharCount < 1 ? {color: '#E0245E'} : {color: '#FFAD1F'})
                    : {}
                  }
              >
                {descriptionCharCount}
              </div>
            </div>
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
                store.dispatch(addHabitAction(habitName, description))
                store.dispatch(openAndCloseModalAction(''))
                store.dispatch(resetFormAction)
              }}
            >
              CREATE
            </Button>
            <Button
              className={cancelButton}
              onClick={() => {
                store.dispatch(openAndCloseModalAction(''))
                store.dispatch(resetFormAction)
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

export default withStyles(styles)(AddHabit)
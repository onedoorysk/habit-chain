import React from 'react'
import '../App.css'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import store from '../store'
import {openAndCloseModalAction, addHabitAction, typeHabitNameAction, typeHabitDescriptionAction, checkNameCharCountAction, checkDescriptionCharCountAction, resetFormAction} from '../actions'
import CharCount from './CharCount'

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
  },
}

const AddHabit = ({classes}) => {
  const {textStyle, createButton, cancelButton} = classes
  const isOpenModal = store.getState().modal
  const {habitName, description, nameCharCount, descriptionCharCount} = store.getState().form
  return (
    <div>
      <div
        className="modal"
        style={{display : isOpenModal === 'addHabit' ? 'flex' : 'none'}}
        onClick={() => {
          store.dispatch(openAndCloseModalAction(''))
          store.dispatch(resetFormAction)
        }}
      >
        <div
          className="modal__window"
          onClick={e => e.stopPropagation()}
        >
          <div className="modal__window__title">NEW HABIT</div>
          <div className="modal__window__contents">
            <div className="textbox-block">
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
              <CharCount
                count={nameCharCount}
                cautionCount={4}
                warningCount={1}
              />
            </div>
            <div class="textbox-block">
              <TextField
                className="textbox-block__text"
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
              <CharCount
                count={descriptionCharCount}
                cautionCount={11}
                warningCount={1}
              />
            </div>
          </div>
          <div className="button-block">
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
    </div>
  )
}

export default withStyles(styles)(AddHabit)
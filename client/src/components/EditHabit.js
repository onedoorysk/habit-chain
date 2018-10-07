import React from 'react'
import '../App.css'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import store from '../store'
import {openAndCloseModalAction, editHabitAction, typeHabitDescriptionAction, checkDescriptionCharCountAction, resetFormAction} from '../actions'
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
  }
}

const EditHabit = ({classes, habit}) => {
  const {textStyle, createButton, cancelButton} = classes
  const isOpenModal = store.getState().modal
  const {id, description} = habit
  const formDescription = store.getState().form.description
  const descriptionCharCount = store.getState().form.descriptionCharCount
  return (
    <div>
      <div
        className="modal"
        style={{'display': isOpenModal === 'editModal' ? 'flex' : 'none'}}
        onClick={() => {
          store.dispatch(openAndCloseModalAction(''))
          store.dispatch(resetFormAction)
        }}
      >
        <div
          className="modal__window"
          onClick={e => e.stopPropagation()}
        >
          <div className="modal__window__title">EDIT HABIT</div>
          <div className="textbox-block">
            <TextField
              className={textStyle}
              label="detail"
              multiline
              rows="1"
              rowsMax="6"
              margin="normal"
              defaultValue={description}
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
          <div className="button-block">
            <Button
              className={createButton}
              disabled={
                formDescription.length > 50 ? true : false
              }
              onClick={() => {
                store.dispatch(editHabitAction(id, formDescription))
                store.dispatch(openAndCloseModalAction(''))
                store.dispatch(resetFormAction)
              }}
            >
              SAVE
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

export default withStyles(styles)(EditHabit)
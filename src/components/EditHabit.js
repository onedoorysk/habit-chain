import React from 'react'
import '../App.css'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import store from '../store'
import {openAndCloseModalAction, editHabitAction, typeHabitDescriptionAction, checkDescriptionCharCountAction, resetFormAction} from '../actions'
import CharCount from './CharCount'

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
    alignItems: 'center',
    justifyContent: 'center'
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
  charCountStyle: {
    fontSize: '14px',
    color: '#B5B5B5',
    margin: '25px 0 0 10px',
    textAlign: 'center',
    width: '10px'
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
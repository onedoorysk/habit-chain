import React from 'react'
import '../App.css'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {openAndCloseModalAction, addHabitAction, typeHabitNameAction, typeHabitDescriptionAction, checkNameCharCountAction, checkDescriptionCharCountAction, resetFormAction, showNameCharCountAction, showDescriptionCharCountAction, hideNameCharCountAction, hideDescriptionCharCountAction} from '../actions'
import CharCount from './CharCount'
import {connect} from 'react-redux'

const AddHabit = ({classes, modal, form, openAndCloseModal, resetForm, typeHabitName, typeHabitDescription, checkNameCharCount, checkDescriptionCharCount, hideNameCharCount, hideDescriptionCharCount, addHabit}) => {
  const {textStyle, createButton, cancelButton} = classes
  const {habitName, description, nameCharCount, descriptionCharCount} = form
  return (
    <div>
      <div
        className="modal"
        style={{display : modal === 'addHabit' ? 'flex' : 'none'}}
        onClick={() => {
          openAndCloseModal('')
          resetForm()
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
                onFocus={() => {
                  checkNameCharCount()
                }}
                onChange={e => {
                  typeHabitName(e.currentTarget.value)
                  checkNameCharCount()
                }}
                onBlur={() => {
                  hideNameCharCount()
                }}
              />
              <CharCount
                count={nameCharCount}
                cautionCount={4}
                warningCount={1}
              />
            </div>
            <div className="textbox-block">
              <TextField
                className="textbox-block__text"
                label="detail"
                multiline
                rows="1"
                rowsMax="6"
                margin="normal"
                value={description}
                onFocus={() => {
                  checkDescriptionCharCount()
                }}
                onChange={e => {
                  typeHabitDescription(e.currentTarget.value)
                  checkDescriptionCharCount()
                }}
                onBlur={() => {
                  hideDescriptionCharCount()
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
                addHabit(habitName, description)
                openAndCloseModal('')
                resetForm()
              }}
            >
              CREATE
            </Button>
            <Button
              className={cancelButton}
              onClick={() => {
                openAndCloseModal('')
                resetForm()
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

const mapStateToProps = state => {
  const {modal, form} = state
  return {
    modal: modal,
    form: form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName)),
    resetForm: () => dispatch(resetFormAction),
    typeHabitName: value => dispatch(typeHabitNameAction(value)),
    typeHabitDescription: value => dispatch(typeHabitDescriptionAction(value)),
    checkNameCharCount: () => dispatch(checkNameCharCountAction),
    checkDescriptionCharCount: () => dispatch(checkDescriptionCharCountAction),
    hideNameCharCount: () => dispatch(hideNameCharCountAction),
    hideDescriptionCharCount: () => dispatch(hideDescriptionCharCountAction),
    addHabit: (habitName, description) => dispatch(addHabitAction(habitName, description))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddHabit))
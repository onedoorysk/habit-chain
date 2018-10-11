import React from 'react'
import '../App.css'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {openAndCloseModalAction, editHabitAction, typeHabitDescriptionAction, checkDescriptionCharCountAction, resetFormAction} from '../actions'
import CharCount from './CharCount'
import {connect} from 'react-redux'

const EditHabit = ({classes, habit, modal, form, openAndCloseModal, editHabit, typeHabitDescription, checkDescriptionCharCount, resetForm}) => {
  const {textStyle, createButton, cancelButton} = classes
  const {id, description} = habit
  const formDescription = form.description
  const descriptionCharCount = form.descriptionCharCount
  return (
    <div>
      <div
        className="modal"
        style={{'display': modal === 'editModal' ? 'flex' : 'none'}}
        onClick={() => {
          openAndCloseModal('')
          resetForm()
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
                typeHabitDescription(e.currentTarget.value)
                checkDescriptionCharCount()
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
                editHabit(id, formDescription)
                openAndCloseModal('')
                resetForm()
              }}
            >
              SAVE
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
  }
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
    editHabit: (id, value) => dispatch(editHabitAction(id, value)),
    typeHabitDescription: description => dispatch(typeHabitDescriptionAction(description)),
    checkDescriptionCharCount: () => dispatch(checkDescriptionCharCountAction),
    resetForm: () => dispatch(resetFormAction)
  }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(EditHabit))
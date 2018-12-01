import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CountInputValue from '../../molecules/CountInputValue'

const AddHabit = ({classes, modal, form, openAndCloseModal, resetForm, typeHabitName, typeHabitDescription, checkNameCharCount, checkDescriptionCharCount, hideNameCharCount, hideDescriptionCharCount, addHabit}) => (
  <>
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
              className={classes.textStyle}
              label="name"
              rows="1"
              rowsMax="1"
              margin="normal"
              required
              value={form.habitName}
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
            <CountInputValue
              count={form.nameCharCount}
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
              value={form.description}
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
            <CountInputValue
              count={form.descriptionCharCount}
              cautionCount={11}
              warningCount={1}
            />
          </div>
        </div>
        <div className="button-block">
          <Button
            className={classes.createButton}
            disabled={
              form.habitName.length === 0 ||
              form.habitName.length > 10 ||
              form.description.length > 50 ? true : false
            }
            onClick={() => {
              addHabit(form.habitName, form.description)
              openAndCloseModal('')
              resetForm()
            }}
          >
            CREATE
          </Button>
          <Button
            className={classes.cancelButton}
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
  </>
)

export default AddHabit

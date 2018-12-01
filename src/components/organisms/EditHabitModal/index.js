import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CountInputValue from '../../molecules/CountInputValue'

const EditHabit = ({classes, habit, modal, form, openAndCloseModal, editHabit, typeHabitDescription, checkDescriptionCharCount, hideDescriptionCharCount, resetForm}) => (
  <>
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
            className={classes.textStyle}
            label="detail"
            multiline
            rows="1"
            rowsMax="6"
            margin="normal"
            defaultValue={habit.description}
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
        <div className="button-block">
          <Button
            className={classes.createButton}
            disabled={
              form.description.length > 50 ? true : false
            }
            onClick={() => {
              editHabit(habit.id, form.description)
              openAndCloseModal('')
              resetForm()
            }}
          >
            SAVE
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

export default EditHabit

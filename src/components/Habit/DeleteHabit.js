import React from 'react'
import '../../App.css'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Warning from '@material-ui/icons/Warning'
import {withRouter} from 'react-router'

const DeleteHabit = ({classes, habit, history, modal, openAndCloseModal, deleteHabit, deleteRecord}) => (
  <>
    <div
      className="modal"
      style={{'display': modal === 'deleteHabit' ? 'flex' : 'none'}}
      onClick={() => {
        openAndCloseModal('')
      }}
    >
      <div
        className="modal__window"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal__window__contents">
          <div className="delete-confirm">
            <div className="delete-confirm__name">
              {habit.habitName}
            </div>
            <div className="delete-confirm__text">will be deleted</div>
          </div>
          <div className="warning-block">
            <Warning className="warning-block__icon" />
            <div className="warning-block__text">
              You will lose your current record
            </div>
          </div>
          <div className="chain-block">
            <div className="chain-block__count">
              {habit.chainCount}
            </div>
            <div className="chain-block__text">
              chain
            </div>
          </div>
        </div>
        <div className="button-block">
          <Button
            className={classes.deleteButton}
            onClick={() => {
              deleteHabit(habit.id)
              deleteRecord(habit.id)
              openAndCloseModal('')
              history.push('/')
            }}
          >
            DELETE
          </Button>
          <Button
            className={classes.cancelButton}
            onClick={() => {
              openAndCloseModal('')
            }}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  </>
)

const styles = {
  cancelButton: {
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#4BA0E3'
    }
  },
  deleteButton: {
    width: '90px',
    backgroundColor: '#EB3029',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#F26963'
    }
  },
}

export default withRouter(withStyles(styles)(DeleteHabit))
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import store from '../store'
import {openModalAction, deleteHabitAction} from '../actions'
import Button from '@material-ui/core/Button'
import Warning from '@material-ui/icons/Warning'
import { withRouter } from 'react-router'

const styles = {
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '999',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalWindow: {
    backgroundColor: '#ffffff',
    border: '3px solid #1C75BC',
    borderRadius: '2%',
    textAlign: 'center',
    position: 'absolute',
    top: '150px',
    margin: '0 30px 0 30px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContents: {
    color: '#444444',
    fontSize: '20px',
    margin: '40px 40px 0 40px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  },
  habitNameStyle: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  modalMessage: {
    textAlign: 'left'
  },
  chainTag: {
    width: '60px',
    height: '25px',
    backgroundColor: '#F9A638',
    borderRadius: '5%',
    color: '#444444',
    textAlign: 'center',
    padding: '2px 0 0 0',
    fontSize: '12px'
  },
  chainCount: {
    fontSize: '20px'
  },
  warningContainer: {
    margin: '0 0 5px 0'
  },
  warningText: {
    fontSize: '12px',
    margin: '0 0 0 3px'
  },
  warningIcon: {
    color: '#F9A638',
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 45px 50px 45px',
    width: '210px'
  },
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

const AddHabit = ({classes, habitName, id, history}) => {
  const {
    root,
    modalWindow,
    modalContents,
    habitNameStyle,
    deleteButton,
    cancelButton,
    chainTag,
    chainCount,
    warningIcon,
    warningText,
    warningContainer,
    modalMessage,
    buttonContainer
  } = classes
  const isOpenModal = store.getState().modal

  return (
    <div>
      <div
        className={root}
        style={{'display': isOpenModal ? 'flex' : 'none'}}
        onClick={() => {
          store.dispatch(openModalAction)
        }}
      >
        <div
          className={modalWindow}
          onClick={e => e.stopPropagation()}
        >
          <div className={modalContents}>
            <div className={modalMessage}>
              <span className={habitNameStyle}>{`${habitName} `}</span>
              <span>will be deleted</span>
            </div>
            <div className={warningContainer}>
              <Warning className={warningIcon} />
              <span className={warningText}>You will lose your current record</span>
            </div>
            <div className={chainTag}>
              <span className={chainCount}>1</span>chain
            </div>
          </div>
          <div className={buttonContainer}>
            <Button
              className={deleteButton}
              onClick={() => {
                store.dispatch(deleteHabitAction(id))
                store.dispatch(openModalAction)
                history.push('/')
              }}
            >
              DELETE
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
      </div>
    </div>
  )
}

export default withRouter(withStyles(styles)(AddHabit))
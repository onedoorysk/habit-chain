import React from 'react'
import store from '../store'
import {Link} from 'react-router-dom'
import {doneHabitAction, registRecordAction} from '../actions'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    width: '375px',
    height: '140px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    margin: '0 0 15px 0',
    listStyle: 'none',
    position: 'relative'
  },
  link: {
    width: '100%',
    height: '100%',
    display: 'block',
    textDecoration: 'none',
    color: '#444444'
  },
  title: {
    color: '#444444',
    margin: '10px 0 0 15px',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  desc: {
    margin: '10px 0 0 15px',
    fontSize: '14px',
  },
  doneButton: {
    position: 'absolute',
    bottom: '10px',
    right: '15px',
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#4BA0E3'
    }
  },
  chain: {
    width: '44px',
    height: '44px',
    backgroundColor: '#F9A638',
    position: 'absolute',
    top: '0',
    right: '0',
    borderRadius: '0 5% 0 0 / 0 5% 0 0',
    fontSize: '12px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  chainTag: {
    position: 'absolute',
    top: '0',
    right: '0',
    height: '25%',
    width: '25%',
    backgroundColor: '#F9A638',
    borderRadius: '0 5px 0 0',
    color: '#444444',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chainCountStyle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  chainTextStyle: {
    display: 'inline-block',
    margin: '8px 0 0 3px'
  }
}

const Habit = ({habit, classes}) => {
  const {root, link, title, desc, doneButton, chainTextStyle, chainCountStyle, chainTag} = classes
  const {id, habitName, description, chainCount} = habit
  // Pop today's record data. If it exists, it changes done-button disable
  const recordList = store.getState().record.filter(record => {
    if (record.id === id
      && record.year === new Date().getFullYear()
      && record.month === new Date().getMonth() + 1) return record
      return
  })
  return (
    <li className={root}>
      <Link
        to={`/detail/${id}`}
        className={link}
      >
        <div className={title}>
          {habitName}
        </div>
        <div className={desc}>
          {description}
        </div>
        <div className={chainTag}>
            <span className={chainCountStyle}>{chainCount}</span>
            <span className={chainTextStyle}>chain</span>
          </div>
      </Link>
      <Button
        className={doneButton}
        onClick={() => {
          store.dispatch(doneHabitAction(id))
          store.dispatch(registRecordAction(id))
        }}
        disabled={recordList.length > 0 ? true : false}
      >
        DONE
      </Button>
    </li>
  )
}

export default withStyles(styles)(Habit)
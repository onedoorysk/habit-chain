import React from 'react'
import store from '../store'
import {Link} from 'react-router-dom'
import {doneHabitAction, registRecordAction} from '../actions'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    width: '165px',
    height: '165px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
    borderRadius: '5%',
    margin: '0 0 15px 0',
    listStyle: 'none',
    position: 'relative'
  },
  link: {
    width: '165px',
    height: '165px',
    display: 'block',
    textDecoration: 'none',
    color: '#444444'
  },
  title: {
    color: '#444444',
    position: 'absolute',
    top: '15px',
    left: '10px',
    fontWeight: 'bold',
    fontSize: '11px'
  },
  desc: {
    position: 'absolute',
    top: '50px',
    left: '0px',
    fontSize: '12px',
    margin: '0 10px 0 10px'
  },
  doneButton: {
    position: 'absolute',
    bottom: '15px',
    left: '38px',
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
  chainCountStyle: {
    fontSize: '24px',
    fontWeight: 'bold',
  }
}

const Habit = ({habit, classes}) => {
  const {root, link, title, desc, doneButton, chain, chainCountStyle} = classes
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
        <div className={chain}>
          <div className={chainCountStyle}>{chainCount}</div>
          <div>chain</div>
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
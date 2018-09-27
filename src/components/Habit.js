import React from 'react'
import store from '../store'
import {Link} from 'react-router-dom'
import {doneHabitAction} from '../actions'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const style = {
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
  },
  title: {
    color: '#444444',
    position: 'absolute',
    top: '15px',
    left: '15px',
    fontWeight: 'bold'
  },
  desc: {
    position: 'absolute',
    top: '50px',
    left: '0px',
    fontSize: '12px',
    margin: '0 15px 0 15px'
  },
  doneButton: {
    position: 'absolute',
    bottom: '20px',
    left: '38px',
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  chain: {
    width: '40px',
    height: '40px',
    backgroundColor: '#F9A638',
    position: 'absolute',
    top: '0',
    right: '0',
    borderRadius: '0 5% 0 0 / 0 5% 0 0',
    fontSize: '12px',
    textAlign: 'center',
    padding: '1px 0 0 0'
  },
  chainCount: {
    fontSize: '20px'
  }
}

const Habit = ({habit, classes}) => {
  const {root, link, title, desc, doneButton, chain, chainCount} = classes
  const {id, habitName, completed, description} = habit
  return (
    <li className={root}>
      <Link
        to={`/detail/${id}`}
        className={link}
      >
      </Link>
      <div className={title}>
        {habitName}
      </div>
      <div className={desc}>
        {description}
      </div>
      <div className={chain}>
        <div className={chainCount}>1</div>
        <div>chain</div>
      </div>
      <Button
        className={doneButton}
        onClick={() => store.dispatch(doneHabitAction(id))}
        disabled={completed}
      >
        DONE
      </Button>
    </li>
  )
}

export default withStyles(style)(Habit)
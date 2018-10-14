import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {doneHabitAction, registRecordAction} from '../actions'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'

const Habit = ({habit, classes, record, doneHabit, registRecord}) => {
  const {id, habitName, description, chainCount} = habit
  // Pop today's record data. If it exists, it changes done-button disable.
  const recordList = record.filter(record => {
    return (record.id === id
      && record.year === new Date().getFullYear()
      && record.month === new Date().getMonth() + 1
      && record.day === new Date().getDate())
  })
  return (
    <li className="habit-card">
      <Link to={`/detail/${id}`} className="habit-card__link">
        <div className="habit-card__name">
          {habitName}
        </div>
        <div className="habit-card__detail">
          {description}
        </div>
        <div className="chain-tag">
          <div className="chain-tag__count">{chainCount}</div>
          <div className="chain-tag__text">chain</div>
        </div>
      </Link>
      <Button
        className={classes.doneButton}
        onClick={() => {
          doneHabit(id)
          registRecord(id)
        }}
        disabled={recordList.length > 0 ? true : false}
      >
        DONE
      </Button>
    </li>
  )
}

const styles = {
  doneButton: {
    position: 'absolute',
    bottom: '10px',
    right: '15px',
    width: '90px',
    backgroundColor: '#1C75BC',
    color: '#FFFFFF',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#1C75BC'
    },
    transition: 'none'
  }
}

const mapStateToProps = state => {
  const {record} = state
  return {
    record: record
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doneHabit: id => dispatch(doneHabitAction(id)),
    registRecord: id => dispatch(registRecordAction(id))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Habit))
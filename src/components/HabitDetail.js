import React from 'react'
import store from '../store'
import {openModalAction} from '../actions'
import {withStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
import Edit from '@material-ui/icons/Edit'
import Album from '@material-ui/icons/Album'
import Calendar from './Calendar'
import DeleteHabit from './DeleteHabit'
import EditHabit from './EditHabit'

const styles = {
  root: {
    margin: '65px 15px 30px 15px',
  },
  habitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  habitNameContainer: {
    display: 'flex'
  },
  habitNameStyle: {
    fontSize: '24px',
    color: '#444444',
    fontWeight: 'bold'
  },
  deleteIcon: {
    color: '#B5B5B5',
    cursor: 'pointer',
    margin: '3px 0 0 0',
    '&:hover': {
      color: '#d5d5d5'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  chainTag: {
    height: '25px',
    backgroundColor: '#F9A638',
    borderRadius: '5px',
    color: '#444444',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 0 0 10px',
    padding: '5px'
  },
  chainCountStyle: {
    fontSize: '24px'
  },
  splitBorder: {
    borderBottom: "1px solid #D8D8D8",
    margin: '0 0 3px 0'
  },
  descriptionContainer: {
    display: 'flex',
    margin: '7px 0 10px 0'
  },
  descriptionTitleIcon: {
    width: '16px',
    height: '16px',
    color: '#444444'
  },
  descriptionTitle: {
    padding: '0 0 0 5px',
    color: '#444444',
    fontSize: '16px',
  },
  editIcon: {
    width: '14px',
    height: '14px',
    margin: '2px 0 0 5px',
    color: '#B5B5B5',
    cursor: 'pointer',
    '&:hover': {
      color: '#d5d5d5'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  descriptionStyle: {
    fontSize: '12px',
    color: '#444444',
    margin: '0 20px 20px 20px'
  },
  recordContainer: {
    display: 'flex',
    margin: '7px 0 10px 0'
  },
  recordIcon: {
    width: '16px',
    height: '16px',
    color: '#444444'
  },
  chainTextStyle: {
    display: 'inline-block',
    margin: '8px 0 0 3px'
  }
}

const HabitDetail = ({match, classes}) => {
  // style
  const {
    root,
    habitContainer,
    habitNameStyle,
    deleteIcon,
    chainTextStyle,
    habitNameContainer,
    chainCountStyle,
    splitBorder,
    descriptionContainer,
    descriptionTitle,
    descriptionTitleIcon,
    editIcon,
    descriptionStyle,
    recordContainer,
    recordIcon,
    chainTag
  } = classes

  const habitList = store.getState().habit
  let targetHabit = {}
  habitList.forEach(habit => {
    if (habit.id === match.params.id) {
      targetHabit = habit
    }
  })
  const {id, habitName, description, chainCount} = targetHabit
  return (
    <div className={root}>
      <div className={habitContainer}>
        <div className={habitNameContainer}>
          <div className={habitNameStyle}>{habitName}</div>
          <div className={chainTag}>
            <span className={chainCountStyle}>{chainCount}</span>
            <span className={chainTextStyle}>chain</span>
          </div>
        </div>
        <div>
          <DeleteIcon
            className={deleteIcon}
            onClick={() => store.dispatch(openModalAction('deleteHabit'))}
          />
        </div>
      </div>
      <div className={splitBorder}></div>
      <div className={splitBorder}></div>
      <div className={descriptionContainer}>
        <FormatAlignLeft className={descriptionTitleIcon}/>
        <div className={descriptionTitle}>DETAIL</div>
        <Edit
          className={editIcon}
          onClick={() => store.dispatch(openModalAction('editModal'))}
        />
      </div>
      <p className={descriptionStyle}>{description}</p>
      <div className={splitBorder}></div>
      <div className={recordContainer}>
        <Album className={recordIcon}/>
        <div className={descriptionTitle}>RECORD</div>
      </div>
      <Calendar id={id}/>
      <DeleteHabit habit={targetHabit} />
      <EditHabit habit={targetHabit} />
    </div>
  )
}

export default withStyles(styles)(HabitDetail)
import React from 'react'
import '../../App.css'
import {openAndCloseModalAction} from '../../actions'
import {withStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft'
import Edit from '@material-ui/icons/Edit'
import Album from '@material-ui/icons/Album'
import DisplayCalendar from '../../containers/DisplayCalendar'
import DeleteHabit from '../../containers/DeleteHabit'
import EditHabit from './EditHabit'
import {connect} from 'react-redux'

const HabitDetail = ({match, classes, habit, openAndCloseModal}) => {
  const {deleteIcon, descriptionTitleIcon, editIcon, recordIcon} = classes
  let targetHabit = {}
  habit.forEach(habit => {
    if (habit.id === match.params.id) {
      targetHabit = habit
    }
  })
  const {id, habitName, description, chainCount} = targetHabit
  return (
    <div className="detail">
      <div className="detail__header">
        <div className="detail__header__title">
          <div className="detail__header__title__name">
            {habitName}
          </div>
          <div className="chain-block">
            <div className="chain-block__count">
              {chainCount}
            </div>
            <div className="chain-block__text">
              chain
            </div>
          </div>
        </div>
        <div>
          <DeleteIcon
            className={deleteIcon}
            onClick={() => openAndCloseModal('deleteHabit')}
          />
        </div>
      </div>
      <div className="split-border" />
      <div className="split-border" />
      <div className="detail__detail">
        <div className="detail__detail__label">
          <FormatAlignLeft className={descriptionTitleIcon}/>
          <div className="detail__detail__label__title">DETAIL</div>
          <Edit
            className={editIcon}
            onClick={() => openAndCloseModal('editModal')}
          />
        </div>
        <div className="detail__detail__text">
          {description}
        </div>
      </div>
      <div className="split-border" />
      <div className="detail__record">
        <div className="detail__record__label">
          <Album className={recordIcon}/>
          <div className="detail__record__label__title">
            RECORD
          </div>
        </div>
      </div>
      <DisplayCalendar id={id} />
      <DeleteHabit habit={targetHabit} />
      <EditHabit habit={targetHabit} />
    </div>
  )
}

const styles = {
  deleteIcon: {
    width: '30px',
    height: '30px',
    color: '#B5B5B5',
    cursor: 'pointer',
    margin: '3px 0 0 0',
    '&:hover': {
      color: '#d5d5d5'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  descriptionTitleIcon: {
    width: '16px',
    height: '16px',
    color: '#444444'
  },
  editIcon: {
    width: '20px',
    height: '20px',
    padding: '0 0 4px 0',
    margin: '0 0 0 5px',
    color: '#B5B5B5',
    cursor: 'pointer',
    '&:hover': {
      color: '#d5d5d5'
    },
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  recordIcon: {
    width: '16px',
    height: '16px',
    color: '#444444'
  }
}

const mapStateToProps = state => {
  const {habit} = state
  return {
    habit: habit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openAndCloseModal: modalName => dispatch(openAndCloseModalAction(modalName))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HabitDetail))
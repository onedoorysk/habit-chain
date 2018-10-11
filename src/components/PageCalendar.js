import React from 'react'
import '../App.css'
import {withStyles} from '@material-ui/core/styles'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import {changeCalendarAction} from '../actions'
import {connect} from 'react-redux'

const PageCalendar = ({classes, calendar, changeCalendar}) => {
  const {prevIcon, nextIcon} = classes
  const {year, month} = calendar
  return (
    <div className="calendar__paging">
      <div>
        <ChevronLeft
          className={prevIcon}
          onClick={() => {
            changeCalendar('prev')
          }}
        />
      </div>
      <div className="calendar__paging__date">
        {year}/{month < 10 ? `0${month}` : month}</div>
      <div>
        <ChevronRight
          className={nextIcon}
          onClick={() => changeCalendar('next')}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const {calendar} = state
  return {
    calendar: calendar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCalendar: changeType => dispatch(changeCalendarAction(changeType))
  }
}

const styles = {
  prevIcon: {
    color: '#B5B5B5',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
  },
  nextIcon: {
    color: '#B5B5B5',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PageCalendar))
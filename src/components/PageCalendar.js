import React from 'react'
import '../App.css'
import {withStyles} from '@material-ui/core/styles'
import store from '../store'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import {changeCalendarAction} from '../actions'

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

const PageCalendar = ({classes}) => {
  const {prevIcon, nextIcon} = classes
  const {year, month} = store.getState().calendar
  return (
    <div className="calendar__paging">
      <div>
        <ChevronLeft
          className={prevIcon}
          onClick={() => store.dispatch(changeCalendarAction('prev'))}
        />
      </div>
      <div className="calendar__paging__date">
        {year}/{month < 10 ? `0${month}` : month}</div>
      <div>
        <ChevronRight
          className={nextIcon}
          onClick={() => store.dispatch(changeCalendarAction('next'))}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(PageCalendar)
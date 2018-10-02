import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import store from '../store'
import {changeCalendarAction} from '../actions'
import Weekday from './Weekday'
import v4 from 'uuid/v4'

const styles = {
  root: {
    position: 'relative',
    top: '-25px'
  },
  dateChangeContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  prevIcon: {
    color: '#B5B5B5',
    cursor: 'pointer'
  },
  nextIcon: {
    color: '#B5B5B5',
    cursor: 'pointer'
  },
  yearAndMonth: {
    margin : '2px 0 0 0',
    color: '#444444',
  },
  dayContainer: {
    margin: '10px 0 0 0',
    width: '100%',
  },
  weekContainer: {
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 3px 0 3px',
    borderBottom: '1px solid #D8D8D8'
  },
  dayStyle: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
  }
}

const Calendar = ({classes}) => {
  const
    {
      root,
      dateChangeContainer,
      prevIcon,
      nextIcon,
      yearAndMonth,
      dayContainer,
      weekContainer,
      dayStyle
    } = classes

  const {year, month, calendarData} = store.getState().calendar

  return (
    <div className={root}>
      <div className={dateChangeContainer}>
        <div>
          <ChevronLeft
            className={prevIcon}
            onClick={() => store.dispatch(changeCalendarAction('prev'))}
          />
        </div>
        <div className={yearAndMonth}>
          {year}/{month < 10 ? `0${month}` : month}</div>
        <div>
          <ChevronRight
            className={nextIcon}
            onClick={() => store.dispatch(changeCalendarAction('next'))}
          />
        </div>
      </div>
      <Weekday />
      <div className={dayContainer}>
        {
          calendarData.map((calendar)  => {
            return (
              <ul className={weekContainer}>
                {
                  calendar.map((data) => {
                    return (
                      <li className={dayStyle}>
                        {data.day}
                      </li>
                    )
                  })
                }
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default withStyles(styles)(Calendar)
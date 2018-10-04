import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import store from '../store'
import {changeCalendarAction} from '../actions'
import Weekday from './Weekday'

const styles = {
  root: {
    position: 'relative',
    top: '-15px'
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
    width: '10vw',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    position: 'relative',
    zIndex: '1'
  },
  chainStyle: {
    border: '7px solid #F9A638',
    width: '9vw',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10%',
    zIndex: '10'
  },
  chainLeft: {
    width: '8.5vw',
    height: '7px',
    backgroundColor: '#F9A638',
    position: 'absolute',
    left: '8vw',
    display: 'inline-block',
    borderRadius: '25%'
  },
  chainRight: {
    width: '8.5vw',
    height: '7px',
    backgroundColor: '#F9A638',
    position: 'absolute',
    right: '8vw',
    display: 'inline-block',
    borderRadius: '25%'
  }
}

const Calendar = ({classes, id}) => {
  const
    {
      root,
      dateChangeContainer,
      prevIcon,
      nextIcon,
      yearAndMonth,
      dayContainer,
      weekContainer,
      dayStyle,
      chainStyle,
      chainLeft,
      chainRight
    } = classes

  const {year, month, calendarData} = store.getState().calendar
  let recordDataOnlyDay = []
  store.getState().record.forEach(record => {
    if (record.id === id && record.year === year && record.month === month) {
      recordDataOnlyDay.push(record.day)
    }
  })
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
                        <div className={
                            recordDataOnlyDay.indexOf(data.day) >= 0
                              ? chainStyle
                              : null}>
                          {data.day}
                        </div>
                        {
                          recordDataOnlyDay.indexOf(data.day) >= 0
                          && recordDataOnlyDay.indexOf(data.day + 1) >= 0
                          ? <span className={chainLeft}></span>
                          : null
                        }
                        {
                          recordDataOnlyDay.indexOf(data.day) >= 0
                          && recordDataOnlyDay.indexOf(data.day - 1) >= 0
                          ? <span className={chainRight}></span>
                          : null
                        }
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
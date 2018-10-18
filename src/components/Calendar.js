import React from 'react'
import '../App.css'
import Weekday from './Weekday'
import PageCalendar from './PageCalendar'
import v4 from 'uuid/v4'
import {connect} from 'react-redux'

const Calendar = ({id, calendar, record}) => {
  const {year, month, calendarData} = calendar
  let recordDataOnlyDay = []
  record.forEach(record => {
    if (record.id === id && record.year === year && record.month === month) {
      recordDataOnlyDay.push(record.day)
    }
  })
  console.log(record)
  return (
    <div className="calendar">
      <PageCalendar />
      <Weekday />
      <div className="calendar__table">
        {
          calendarData.map((calendar)  => {
            return (
              <ul key={v4()} className="week-block">
                {
                  calendar.map((data) => {
                    return (
                      <li key={v4()} className="week-block__day">
                        <div className={
                          recordDataOnlyDay.indexOf(data.day) >= 0
                            ? "week-block__day__chain"
                            : ""
                          }
                        >
                          {data.day}
                        </div>
                        {
                          recordDataOnlyDay.indexOf(data.day) >= 0
                          && recordDataOnlyDay.indexOf(data.day + 1) >= 0
                          ? <span className="week-block__day__chain-leftbar" />
                          : null
                        }
                        {
                          recordDataOnlyDay.indexOf(data.day) >= 0
                          && recordDataOnlyDay.indexOf(data.day - 1) >= 0
                          ? <span className="week-block__day__chain-rightbar" />
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

const mapStateToProps = state => {
  const {calendar, record} = state
  return {
    calendar: calendar,
    record: record
  }
}

export default connect(mapStateToProps, undefined)(Calendar)
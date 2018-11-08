import React from 'react'
import '../../App.css'
import Weekday from './Weekday'
import PageCalendar from './PageCalendar'
import v4 from 'uuid/v4'

const Calendar = ({calendar, recordsOfDisplayedCalendar, changeCalendar}) => (
  <div className="calendar">
    <PageCalendar
      onClick={changeType => changeCalendar(changeType)}
      {...calendar}
    />
    <Weekday />
    <div className="calendar__table">
      {calendar.calendarData.map(calendar => {
        return (
          <ul key={v4()} className="week-block">
            {calendar.map(data => {
              return (
                <li key={v4()} className="week-block__day">
                  <div className={
                    recordsOfDisplayedCalendar.indexOf(data.day) >= 0
                      ? "week-block__day__chain" : ""
                    }
                  >
                    {data.day}
                  </div>
                    {recordsOfDisplayedCalendar.indexOf(data.day) >= 0
                      && recordsOfDisplayedCalendar.indexOf(data.day + 1) >= 0
                      && <span className="week-block__day__chain-leftbar" />
                    }
                    {recordsOfDisplayedCalendar.indexOf(data.day) >= 0
                      && recordsOfDisplayedCalendar.indexOf(data.day - 1) >= 0
                      && <span className="week-block__day__chain-rightbar" />
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

export default Calendar
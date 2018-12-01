import React from 'react'
import DayOfWeek from '../../atoms/DayOfWeek'
import PageCalendar from '../../molecules/PagingCalendar'
import v4 from 'uuid/v4'

const Calendar = ({
  calendar,
  recordsOfDisplayedCalendar,
  dayOfWeekList,
  changeCalendar,
  classes
}) => (
  <div className="calendar">
    <PageCalendar
      onClick={changeType => changeCalendar(changeType)}
      {...calendar}
      {...classes}
    />
    <div className="calendar__weekdays">
      {dayOfWeekList.map((day, index) => (
        <DayOfWeek key={index} styles="calendar__weekdays__day">{day}</DayOfWeek>
      ))}
    </div>
    <div className="calendar__table">
      {calendar.calendarData.map(calendar => (
        <ul key={v4()} className="week-block">
          {calendar.map(data => (
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
          ))}
        </ul>
      ))}
    </div>
  </div>
)

export default Calendar

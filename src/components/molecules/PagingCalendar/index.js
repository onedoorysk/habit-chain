import React from 'react'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

const PageCalendar = ({year, month, onClick, prevIcon, nextIcon}) => (
  <div className="calendar__paging">
    <div>
      <ChevronLeft
        className={prevIcon}
        onClick={() => onClick('prev')}
      />
    </div>
    <div className="calendar__paging__date">
      {year}/{month < 10 ? `0${month}` : month}</div>
    <div>
      <ChevronRight
        className={nextIcon}
        onClick={() => onClick('next')}
      />
    </div>
  </div>
)

export default PageCalendar

import React from 'react'
import '../../App.css'
import {withStyles} from '@material-ui/core/styles'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

const PageCalendar = ({year, month, onClick, classes}) => (
  <div className="calendar__paging">
    <div>
      <ChevronLeft
        className={classes.prevIcon}
        onClick={() => onClick('prev')}
      />
    </div>
    <div className="calendar__paging__date">
      {year}/{month < 10 ? `0${month}` : month}</div>
    <div>
      <ChevronRight
        className={classes.nextIcon}
        onClick={() => onClick('next')}
      />
    </div>
  </div>
)

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

export default withStyles(styles)(PageCalendar)
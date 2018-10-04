import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 19px 0 19px',
    color: '#444444',
    fontSize: '10px'
  },
  weekdayStyle: {
    textAlign: 'center'
  }
}

const Weekday = ({classes}) => {
  const {root, weekdayStyle} = classes
  return (
    <div className={root}>
      <div className={weekdayStyle}>S</div>
      <div className={weekdayStyle}>M</div>
      <div className={weekdayStyle}>T</div>
      <div className={weekdayStyle}>W</div>
      <div className={weekdayStyle}>T</div>
      <div className={weekdayStyle}>F</div>
      <div className={weekdayStyle}>S</div>
    </div>
  )
}

export default withStyles(styles)(Weekday)
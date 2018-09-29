import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 19px 0 19px',
    color: '#444444',
    fontSize: '10px'
  }
}

const Weekday = ({classes}) => {
  const {root} = classes
  return (
    <div className={root}>
      <div>S</div>
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
    </div>
  )
}

export default withStyles(styles)(Weekday)
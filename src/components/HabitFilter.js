import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FilterTab from './FilterTab'

const styles = {
  root: {
    width: '100%',
    height: '42px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#f5f5f5',
    position: 'fixed',
    top: '56px',
    left: '0',
    zIndex: '888'
  }
}

const Filter = ({classes}) => {
  const {root} = classes
  return (
    <div className={root}>
      <FilterTab tabName={'all'} />
      <FilterTab tabName={'not yet'} />
      <FilterTab tabName={'done'} />
    </div>
  )
}

export default withStyles(styles)(Filter)
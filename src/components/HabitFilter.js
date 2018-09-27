import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import store from '../store'
import { filterListAction } from '../actions'

const styles = {
  root: {
    margin: '0 0 15px 0',
    maxWidth: '100%',
    height: '42px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#f5f5f5'
  },
  tab: {
    height: '100%',
    padding: '13px 20px 0 20px',
    color: '#a4a2a2',
  }
}

const Filter = ({classes}) => {
  const {root, tab} = classes
  return (
    <div className={root}>
      <div className={tab} onClick={() => store.dispatch(filterListAction('all'))} >ALL</div>
      <div className={tab} onClick={() => store.dispatch(filterListAction('not yet'))}>NOT YET</div>
      <div className={tab} onClick={() => store.dispatch(filterListAction('done'))}>DONE</div>
    </div>
  )
}

export default withStyles(styles)(Filter)
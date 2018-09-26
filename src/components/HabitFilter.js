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
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  tab: {
    height: '100%',
    padding: '13px 20px 0 20px',
    color: '#A4A2A2',
  }
}

const Filter = props => {
  const {root, tab} = props.classes
  return (
    <div className={root}>
      <div className={tab} style={{ borderBottom: '2px solid #5CC0EF' }} onClick={() => store.dispatch(filterListAction('all'))} >ALL</div>
      <div className={tab} onClick={() => store.dispatch(filterListAction('not yet'))}>NOT YET</div>
      <div className={tab} onClick={() => store.dispatch(filterListAction('done'))}>DONE</div>
    </div>
  )
}

export default withStyles(styles)(Filter)
import React from 'react'
import store from '../store'
import { filterListAction } from '../actions'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    minWidth: '100px',
    height: '100%',
    padding: '13px 10px 0 10px',
    color: '#A4A2A2',
    textAlign: 'center',
    cursor: 'pointer'
  },
  label: {
    position: 'relative',
  },
  notYetCount: {
    width: '20px',
    height: '20px',
    color: '#FFFFFF',
    backgroundColor: '#5CC0EF',
    borderRadius: '50%',
    position: 'absolute',
    top: '-8px',
    right: '-16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px'
  }
}

const currentFilterStyle = {
  borderBottom: '2px solid #5CC0EF',
  color: '#5CC0EF'
}

const Tab = ({tabName, classes, count}) => {
  const currentFilter = store.getState().filter
  const {root, notYetCount, label} = classes
  return (
    <div
      className={root}
      onClick={() => store.dispatch(filterListAction(tabName))}
      style={currentFilter === tabName ? currentFilterStyle : {} }
    >
      <div className={label}>{tabName.toUpperCase()}{count ? <span className={notYetCount}>{count}</span> : null}</div>
    </div>
  )
}

export default withStyles(styles)(Tab)
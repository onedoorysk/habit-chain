import React from 'react'
import store from '../store'
import { filterListAction } from '../actions'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    width: '100px',
    height: '100%',
    padding: '13px 10px 0 10px',
    color: '#a4a2a2',
    textAlign: 'center'
  }
}

const currentFilterStyle = {
  borderBottom: '2px solid #5CC0EF',
  color: '#5CC0EF'
}

const Tab = ({tabName, classes}) => {
  const currentFilter = store.getState().filter
  const {root} = classes
  return (
    <div
      className={root}
      onClick={() => store.dispatch(filterListAction(tabName))}
      style={currentFilter === tabName ? currentFilterStyle : {} }
    >
      {tabName.toUpperCase()}
    </div>
  )
}

export default withStyles(styles)(Tab)
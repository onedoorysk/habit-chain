import React from 'react'
import '../App.css'
import store from '../store'
import {filterListAction} from '../actions'

const currentFilterStyle = {
  borderBottom: '2px solid #5CC0EF',
  color: '#5CC0EF'
}

export default ({tabName, count}) => {
  const currentFilter = store.getState().filter
  return (
    <div
      className="filter__tab"
      onClick={() => store.dispatch(filterListAction(tabName))}
      style={currentFilter === tabName ? currentFilterStyle : {} }
    >
      <div className="filter__name">
        {tabName.toUpperCase()}
        {count ? <span className="habit-count">{count}</span> : null}
      </div>
    </div>
  )
}
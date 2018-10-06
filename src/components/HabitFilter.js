import React from 'react'
import '../App.css'
import FilterTab from './FilterTab'
import store from '../store'

export default () => {
  const habitListSize = store.getState().habit.filter(h => !h.completed).length
  return (
    <div className="filter">
      <FilterTab tabName={'all'} />
      <FilterTab tabName={'not yet'} count={habitListSize}/>
      <FilterTab tabName={'done'} />
    </div>
  )
}
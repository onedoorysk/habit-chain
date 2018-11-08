import React from 'react'
import '../../App.css'
import FilterTab from './FilterTab'

const HabitFilter = ({habit, filter, filterList}) => (
  <div className="filter">
    <FilterTab
      tabName={'all'}
      filter={filter}
      onClick={tabName => filterList(tabName)}
    />
    <FilterTab
      tabName={'not yet'}
      filter={filter}
      onClick={tabName => filterList(tabName)}
      count={habit.filter(h => !h.completed).length}
    />
    <FilterTab
      tabName={'done'}
      filter={filter}
      onClick={tabName => filterList(tabName)}
    />
  </div>
)

export default HabitFilter
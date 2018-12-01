import React from 'react'
import FilterHabit from '../../molecules/FilterHabit'

const Filter = ({habit, filter, filterList}) => (
  <div className="filter">
    <FilterHabit
      tabName={'all'}
      filter={filter}
      onClick={tabName => filterList(tabName)}
    />
    <FilterHabit
      tabName={'not yet'}
      filter={filter}
      onClick={tabName => filterList(tabName)}
      count={habit.filter(h => !h.completed).length}
    />
    <FilterHabit
      tabName={'done'}
      filter={filter}
      onClick={tabName => filterList(tabName)}
    />
  </div>
)

export default Filter

import React from 'react'
import '../../App.css'

const FilterTab = ({tabName, count, filter, onClick}) => (
  <div
    className="filter__tab"
    onClick={() => onClick(tabName)}
    style={filter === tabName ? {borderBottom: '2px solid #5CC0EF', color: '#5CC0EF'} : {}}>
    <div className="filter__name">
      {tabName.toUpperCase()}
      {count && <span className="habit-count">{count}</span>}
    </div>
  </div>
)

export default FilterTab
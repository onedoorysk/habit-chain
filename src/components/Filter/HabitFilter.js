import React from 'react'
import '../../App.css'
import FilterTab from './FilterTab'
import {connect} from 'react-redux'

const HabitFilter = ({habit}) => {
  return (
    <div className="filter">
      <FilterTab
        tabName={'all'}
      />
      <FilterTab
        tabName={'not yet'}
        count={habit.filter(h => !h.completed).length}
      />
      <FilterTab
        tabName={'done'}
      />
    </div>
  )
}

const mapStateToProps = state => {
  const {habit} = state
  return {
    habit: habit
  }
}

export default connect(mapStateToProps, undefined)(HabitFilter)
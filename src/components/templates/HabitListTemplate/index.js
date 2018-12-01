import React from 'react'
import VisibleHabits from '../../../containers/VisibleHabits'
import Header from '../../../components/Header'
import FilterHabit from '../../../containers/FilterHabit'
import RemainingTimer from '../../../components/RemainingTimer'

const HabitListTemplate = () => (
    <div>
      <div className="pc">
        <div>Change your window size to less than 768px.</div>
      </div>
      <div className="sp">
        <Header/>
        <FilterHabit/>
        <VisibleHabits/>
        <RemainingTimer />
      </div>
    </div>
)

export default HabitListTemplate
import React from 'react'
import VisibleHabits from '../../../containers/VisibleHabits'
import Header from '../../../components/organisms/Header'
import FilterHabit from '../../../containers/FilterHabit'
import AlertWindowSize from '../../organisms/AlertWindowSize'
import DisplayRemainingTimer from '../../../containers/DisplayRemainingTimer'

const HabitListTemplate = () => (
  <div>
    <AlertWindowSize/>
    <div className="sp">
      <Header/>
      <FilterHabit/>
      <VisibleHabits/>
      <DisplayRemainingTimer/>
    </div>
  </div>
)

export default HabitListTemplate

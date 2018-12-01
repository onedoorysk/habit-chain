import React from 'react'
import DisplayHabitDetail from '../../../containers/DisplayHabitDetail'
import Header from '../../organisms/Header'
import AlertWindowSize from '../../organisms/AlertWindowSize'
import DisplayRemainingTimer from '../../../containers/DisplayRemainingTimer'

const HabitDetailTemplate = (props) => (
  <div>
    <AlertWindowSize/>
    <div className="sp">
      <Header/>
      <DisplayHabitDetail {...props}/>
      <DisplayRemainingTimer/>
    </div>
  </div>
)

export default HabitDetailTemplate

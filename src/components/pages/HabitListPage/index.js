import React, { Component } from 'react'
import '../../../App.css'
import VisibleHabits from '../../../containers/VisibleHabits'
import Header from '../../../components/Header'
import FilterHabit from '../../../containers/FilterHabit'
import RemainingTimer from '../../../components/RemainingTimer'
import { firstProcessAction } from '../../../actions'
import store from '../../../store'

class HabitList extends Component {

  componentDidMount() {
    store.dispatch(firstProcessAction)
  }

  render() {
    return (
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
  }
}

export default HabitList
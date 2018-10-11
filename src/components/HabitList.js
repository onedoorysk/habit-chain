import React from 'react'
import '../App.css'
import Habit from './Habit'
import AddHabit from './AddHabit'
import AddHabitButton from './AddHabitButton'
import {connect} from 'react-redux'

const HabitList = ({filter, habit}) => {
  return (
    <div>
      <ul className="habit-list">
        {
          habit.filter(habit => {
            switch (filter) {
              case 'not yet':
                return !habit.completed
              case 'done':
                return habit.completed
              case 'all':
                return habit
              default:
                return habit
            }
          }).map(habit => <Habit key={habit.id} habit={habit} />)
        }
      </ul>
      <AddHabit />
      <AddHabitButton />
    </div>
  )
}

const mapStateToProps = state => {
  const {filter, habit} = state
  return {
    filter: filter,
    habit: habit
  }
}

export default connect(mapStateToProps, undefined)(HabitList)
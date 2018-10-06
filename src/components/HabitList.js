import React from 'react'
import store from '../store'
import Habit from './Habit'
import AddHabit from './AddHabit'

export default () => {
  const currentFilter = store.getState().filter
  const filterHabitList = store.getState().habit.filter(habit => {
    switch (currentFilter) {
      case 'not yet':
        return !habit.completed
      case 'done':
        return habit.completed
      case 'all':
        return habit
      default:
        return habit
    }
  })
  return (
    <div>
      <ul className="habit-list">
        {filterHabitList.map(habit => <Habit key={habit.id} habit={habit} />)}
      </ul>
      <AddHabit />
    </div>
  )
}
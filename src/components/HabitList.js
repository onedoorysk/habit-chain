import React from 'react'
import store from '../store'
import Habit from './Habit'
import { withStyles } from '@material-ui/core/styles'
import AddHabit from './AddHabit'

const styles = {
  root: {
    margin: '113px auto 0 auto',
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  }
}

const habitList = ({classes}) => {
  const {root} = classes
  const habitList = store.getState().habit
  const currentFilter = store.getState().filter
  const filteringHabitList = habitList.filter(habit => {
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
      <ul className={root}>
        {
          filteringHabitList.map(habit => {
            return (
              <Habit key={habit.id} habit={habit} />
            )
          })
        }
      </ul>
      <AddHabit />
    </div>
  )
}

export default withStyles(styles)(habitList)
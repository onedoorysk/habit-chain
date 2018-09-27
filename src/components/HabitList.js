import React from 'react'
import store from '../store'
import Habit from './Habit'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '113px auto 0 auto'
  }
}

const habitList = ({classes}) => {
  const {root} = classes
  const habitList = store.getState().habit
  const currentFilter = store.getState().filter
  return (
    <div>
      <ul className={root}>
        {
          habitList.filter(habit => {
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
          }).map(habit => {
            return (
              <Habit key={habit.id} habit={habit} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default withStyles(styles)(habitList)